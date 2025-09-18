@echo off
echo ========================================
echo    GEMINI CHAT APP - QUICK START
echo ========================================
echo.

echo [1/4] Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)
echo ✓ Node.js is installed

echo.
echo [2/4] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo ERROR: Failed to install dependencies!
    echo Please check your internet connection and try again.
    echo.
    pause
    exit /b 1
)
echo ✓ Dependencies installed successfully

echo.
echo [3/4] Starting the server...
echo ✓ Chat app will open at: http://localhost:3001
echo.
echo ========================================
echo   🚀 STARTING GEMINI CHAT APP...
echo ========================================
echo.
echo Press Ctrl+C to stop the server
echo.

REM Start the server
call npm start

echo.
echo Server stopped.
pause
