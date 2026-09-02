@echo off
rem Publishes this folder to kjcrask.com (GitHub Pages). Live in about a minute.
cd /d "%~dp0"
git add -A
git diff --cached --quiet && echo Nothing new to publish. && goto push
git commit -m "Update kjcrask.com %date% %time%"
if errorlevel 1 (echo Commit failed. Nothing was published. & pause & exit /b 1)
:push
git push origin main
if errorlevel 1 (echo Push failed. The site was NOT updated. Check your connection or GitHub sign-in. & pause & exit /b 1)
echo.
echo Published. Check https://kjcrask.com in about a minute.
pause
