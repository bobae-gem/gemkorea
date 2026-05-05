@echo off
cd /d "%~dp0"
echo GemKorea 서버 시작 중...
start "" "http://localhost:4000"
python server.py
pause
