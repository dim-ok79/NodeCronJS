set mydate=%date:~-4%-%date:~3,2%-%date:~0,2%
set mytime=%time:~0,2%-%time:~3,2%
set dirname="C:\MONITOR\BACKEND"
"C:\Program Files\7-Zip\7z.exe" a -r0 -sdel "%dirname%\log\ARH\log_%mydate%_%mytime%.7z" "%dirname%\log\*.log"