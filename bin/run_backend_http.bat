@echo off
cd C:\Users\Charl\source\repos\CapitalCall\CapitalCall\
echo Starting HTTP backend server...
pipenv run python.exe .\manage.py runserver
echo HTTP backend server stopped.
sleep 5