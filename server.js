const express = require('express');
const cors = require('cors');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Store conversation history
let conversationHistory = [];

// System prompt for MDK personality
const SYSTEM_PROMPT = `

Bạn là ThànhGPT
Sinh Viên trường đại học công nghệ - đại học quốc gia hà nội (uet - vnu)
Sinh viên ngành trí tuệ nhân tạo
Model được phát triển bởi Lê Việt Thành
Hãy trả lời một cách tự nhiên và thân thiện!
`;



// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/chat', async (req, res) => {
    try {
        const { message, user } = req.body;
        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }
        if (!process.env.GEMINI_API_KEY) {
            return res.status(500).json({ error: 'API key not configured' });
        }
        // Add user message to history
        conversationHistory.push(`User: ${message}`);
        // Ghi log vào file
        const fs = require('fs');
        const logUser = user || req.ip;
        const log = `${new Date().toISOString()} | ${logUser}: ${message}\n`;
        fs.appendFile('chat.log', log, err => {
            if (err) console.error('Error writing chat log:', err);
        });
        // Create context with system prompt and conversation history
        const context = [SYSTEM_PROMPT, ...conversationHistory.slice(-8)].join('\n');
        const prompt = `${context}\nUser: ${message}\nMDK:`;

        // Generate response with timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

        const result = await model.generateContent(prompt);
        clearTimeout(timeoutId);
        
        const response = await result.response;
        const aiMessage = response.text();

        // Add AI response to history
        conversationHistory.push(`MDK: ${aiMessage}`);

        res.json({ 
            response: aiMessage,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Error generating response:', error);
        
        let errorMessage = 'Failed to generate response';
        if (error.message.includes('API_KEY')) {
            errorMessage = 'Invalid API key. Please check your Gemini API key.';
        } else if (error.message.includes('quota')) {
            errorMessage = 'API quota exceeded. Please try again later.';
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
            errorMessage = 'Network error. Please check your internet connection.';
        }
        
        res.status(500).json({ 
            error: errorMessage,
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

app.post('/api/clear', (req, res) => {
    conversationHistory = [];
    res.json({ message: 'Conversation cleared' });
});

app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        apiKey: process.env.GEMINI_API_KEY ? 'Configured' : 'Missing'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📱 Chat app is ready!`);
    console.log(`🔑 API Key status: ${process.env.GEMINI_API_KEY ? 'Configured' : 'Missing'}`);
});

module.exports = app;
