@echo off
rem Publishes this folder to kjcrask.com (GitHub Pages). Live in about a minute.
cd /d "%~dp0"
git add -A
git commit -m "Update kjcrask.com %date% %time%" || echo Nothing new to publish.
git push origin main
echo.
echo Done. Check https://kjcrask.com in about a minute.
pause
