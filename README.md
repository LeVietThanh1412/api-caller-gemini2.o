# Gemini Chat App

A beautiful, modern chat application powered by Google Gemini AI with an intuitive user interface.

## 🚀 Quick Start

### Option 1: One-Click Start (Recommended)
Double-click `start.bat` to automatically install dependencies and start the application.

### Option 2: Manual Setup
```bash
# Install dependencies
npm install

# Start the application
npm start
```

## 🌟 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Real-time Chat**: Interactive chat interface with typing indicators
- **Conversation Memory**: Maintains context throughout the conversation
- **One-Click Deploy**: Easy deployment with included batch file
- **Cross-Platform**: Works on Windows, macOS, and Linux
- **Mobile Responsive**: Optimized for all device sizes

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: Vanilla JavaScript, CSS3, HTML5
- **AI**: Google Gemini Pro API
- **Styling**: Custom CSS with modern design principles

## 📁 Project Structure

```
gemini-chat-app/
├── public/
│   ├── index.html      # Main HTML file
│   ├── style.css       # Styling and animations
│   └── script.js       # Frontend JavaScript
├── server.js           # Express server
├── package.json        # Dependencies and scripts
├── .env               # Environment variables
├── start.bat          # Windows quick-start script
└── README.md          # This file
```

## 🔧 Configuration

The application uses the following environment variables:

- `GEMINI_API_KEY`: Your Google Gemini API key
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment mode (development/production)

## 🌐 Deployment

### Local Development
1. Run `start.bat` or `npm start`
2. Open http://localhost:3000

### Production Deployment
1. Set `NODE_ENV=production` in your environment
2. Configure your production API key
3. Deploy to your preferred hosting service (Heroku, Railway, etc.)

## 📱 Usage

1. **Start Chatting**: Type your message and press Enter
2. **New Line**: Use Shift+Enter for line breaks
3. **Clear Chat**: Click the trash icon to clear conversation
4. **Status**: Monitor connection status in the header

## 🎨 Customization

### Themes
Modify `public/style.css` to customize:
- Color schemes
- Fonts
- Animations
- Layout

### Features
Extend `server.js` to add:
- User authentication
- Message persistence
- File uploads
- Voice chat

## 🚀 Deployment Options

### Railway
```bash
# Connect to Railway
railway login
railway init
railway add
railway deploy
```

### Heroku
```bash
# Login to Heroku
heroku login
heroku create your-app-name
git push heroku main
```

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel
vercel
```

## 🔐 Security

- Environment variables for sensitive data
- Input validation and sanitization
- CORS protection
- Rate limiting ready (can be added)

## 🛟 Troubleshooting

### Common Issues

1. **"Module not found" error**
   - Run `npm install` to install dependencies

2. **"API key not configured" error**
   - Check your `.env` file has the correct API key

3. **Port already in use**
   - Change the PORT in `.env` or stop other applications

4. **Connection refused**
   - Ensure the server is running with `npm start`

## 📞 Support

If you encounter any issues:
1. Check the console for error messages
2. Verify your API key is valid
3. Ensure Node.js is installed
4. Check network connectivity

## 🎯 Roadmap

- [ ] User authentication
- [ ] Message history persistence
- [ ] File and image sharing
- [ ] Voice input/output
- [ ] Multiple conversation threads
- [ ] Emoji reactions
- [ ] Dark/light theme toggle

## 📄 License

MIT License - feel free to use and modify as needed.

---

**Happy Chatting! 🤖✨**
