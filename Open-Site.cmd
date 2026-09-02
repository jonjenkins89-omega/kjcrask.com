@echo off
rem Opens the K.J. Crask site from this folder in your browser.
rem Edit any file, save, refresh the browser. Close this window to stop.
cd /d "%~dp0"
start "" "http://localhost:8787/"
python -m http.server 8787
