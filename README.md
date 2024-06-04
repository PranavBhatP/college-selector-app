# College Finder

- Assignment submission for React Front-End internship role.
- Vercel Link: https://college-selector-app-vercel.vercel.app/ (Read Setup Instructions if issues in the Autocomplete List)
## Overview
As outlined in the assignment provided, the project is aimed at building a web application for selecting from a wide list of colleges from all around the world. The list is quite exhaustive and has more than 10k+ entries. This necessitated usage of techniques like debouncing of API Calls, in order to handle such large search data. The result is then stored in the local storage for persistence.

Tech Stack:
- React.js 
- Material UI Components
- Hipo Worldwide College API.


## User flow:

- The user enters the application and searches his/her college from the Autocomplete searchable dropdown menu. The choice is selected and is reflected in th form of a card displaying the college choice and the country.

- The user then clicks on the dashboard button to enter the dashboard menu, where he/she can view the details of the college and the college logo as well. 

## Setup 
On the local machine
1. Install dependencies
    ```bash
    npm install
    ```
2. Run the application in dev mode.
    ```bash
    npm start
    ```
3. Follow the user flow to utilise the entire UX of the application.

On the vercel app, since the API calls for the Hipo API are made over HTTP and since Vercel doesn't allow insecure content. 
Steps to fix this issue, as noted in the StackOverflow post (https://stackoverflow.com/questions/76165560/the-content-must-be-served-over-https):

1. Click the Not secure warning next to the URL.

2. Click Site settings .

3. Near the bottom of the list is Insecure content, change this to Allow

4. Close settings, go back to the site, and Refresh the page
## Video Presentation of functionalities.
At the link below:

https://youtu.be/4h5Dth-ICQY

