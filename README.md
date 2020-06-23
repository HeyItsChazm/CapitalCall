# Capital Call

Server Dependencies:
  - Pipenv
  - Python3
  - Node.js

Pipenv Packages (can be installed with 'pipenv install' in the 'CapitalCall/' directory.):
  - django
  - django-money
  - djangorestframework
  - django-cors-headers

NPM Required Packages (can be installed with 'npm install' in the 'CapitalCall/CapitalCall/frontend' directory.):
  - react-router-dom
  - axios


To start the Frontend server:
  - Open a new terminal session
  - Navigate to 'CapitalCall/CapitalCall/frontend'
  - Run 'npm start'
  - The default browser should automatically open and display the Welcome page.
    - If the browser does not automatically start, you can reach it manually by opening up the browser of choice, and navigating to http://localhost:3000

To start the Backend server:
  - Open a new terminal session
  - Navigate to 'CapitalCall/'
  - Run 'pipenv shell'
  - Navigate to 'CapitalCall/'
  - Run 'python.exe ./manage.py runserver'
    - Alternatively, run 'python.exe ./manage.py runsslserver' for HTTPS requests.
  - [OPTIONAL] Open up the browser of choice, and navigate to http://localhost:8000/api to check that the backend is running.
