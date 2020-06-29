# Capital Call

#### Server Dependencies
  - Pipenv
  - Python3
  - Node.js

#### Install

CapitalCall/bin/install.bat
  - This will automatically install all the dependencies for the project (This is the same as using the 'npm install' and 'pipenv install' instructions below)

Pipenv Packages (can be installed with 'pipenv install' in the 'CapitalCall/' directory.):
  - django
  - django-money
  - djangorestframework
  - django-cors-headers

NPM Required Packages (can be installed with 'npm install' in the 'CapitalCall/CapitalCall/frontend' directory.):
  - react-router-dom
  - axios

#### Initialisation

Batch files are included in 'CapitalCall/bin' for ease of use:
  - run_frontend_http.bat
    - This will automatically start the React frontend server, running on port 3000, and will open the site welcome page in the browser.
  - run_backend_http.bat
    - This will automatically start the Django backend server, running on port 8000.

To start the Frontend server:
  - Open a new terminal session
  - Navigate to 'CapitalCall/CapitalCall/frontend'
  - Run 'npm start'
  - The default browser should automatically open and display the Welcome page.
    - If the browser does not automatically start, you can reach it manually by opening up the browser of choice, and navigating to 'http://localhost:3000'

To start the Backend server:
  - Open a new terminal session
  - Navigate to 'CapitalCall/'
  - Run 'pipenv shell'
  - Navigate to 'CapitalCall/'
  - Run 'python.exe ./manage.py runserver'
  - [OPTIONAL] Open up the browser of choice, and navigate to 'http://localhost:8000/api' to check that the backend is running.

#### Usage

Ensure the backend and frontend servers are running, and navigate to 'http://localhost:3000' if not done so already.
You should be greeted by a welcome page with a large blue 'Capital Call' button in the center.
This button will allow you to enter the application by opening a page to 'http://localhost:3000/dashboard'.

The dashboard will show you all previous committed calls, and which funds have been used to invest.
In the top right-hand corner, navigation links have been created to allow you to enter different sections of the site.
The link labelled 'Dashboard' and 'New Call' will take you to 'http://localhost:3000/dashboard' and 'http://localhost:3000/newcall' respectively.
Click 'New Call' to move onto the new call creation page.

The new call page will have 4 input fields, and a preview of the new call before it is submitted to the database.
The preview operates on a First In, First Out (FIFO) rule, and will show each commitment in date order (most recent date will be last), and how much has been drawn against each.
The preview will then calculate, according to the 'Capital Required for Investment field' value, the amount drawn against each commitment, if the call was submitted.

Once you are happy with your inputs and the preview results, click the blue 'Confirm' button. This will perform some background checks to validate the data, before submitting it to the database.
Any issues will be raised in the form of an alert box at the top of the web browser. Please correct these issues (if present) and click confirm again to resubmit.

db_blank.sqlite3 has been included to provide an easy way of resetting the project without using the django admin interface.
Just copy and paste the file in the same directory and rename it to 'db.sqlite3'.
 