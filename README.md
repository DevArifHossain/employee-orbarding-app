## Table of context

- [About Application](#application)
- [UI Design](#ui_design)
- [Frontend](#frontend)
- [Backend](#backend)
    - [Microservice Part](#microservice)
    - [Serverless Part](#serverless)
    - [Database](#database)
- [3rd party Services](#third_party)

## About Application <a name="application"></a>
This is an employee onbarding app where you can add new employees and give/remove access from project trello board.


## UI Design <a name="ui_design"></a>

The application UI was disigned with **Figma**.
Design URL: https://www.figma.com/proto/m0CHzlraSMfbf3IOeOSVAU/Untitled?node-id=0%3A3&scaling=min-zoom.
<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fm0CHzlraSMfbf3IOeOSVAU%2FUntitled%3Fnode-id%3D0%253A3%26scaling%3Dmin-zoom" allowfullscreen></iframe>

## Frontend <a name="frontend"></a>
The application Frontend mainly consists 2 pars. A Dialog to add new employees and a Table where you can view all your employees and controll their access to the company Trello board access.
- Tech Stack - **Typescript, ReactJS, NextJS, ChakraUI**
- Features
	- *Adding New Member* -  `After submitting the form the fontend makes POST request to users & app service with form data.`
	- *Showing Member List* - `Homepage fetces data from users_access service and showes them in the employee table.`

## Backend <a name="backend"></a>
The backend is build with **NodeJS**, **ExpressJS** based on **Microservice** architecture and **REST** Apis. It has in total 4 services which include 3 dockerized services and 1 serverless event bus.

<ins>**Dockerized Services:**</ins>
|Service         |PORT                    |Description                       
|----------------|-------------------------------|-----------------------------|
|Apps 			 |5000            |Storing & Fetching Apps            |
|Users           |5001            |Storing & Fetching Users            |
|Query           |5002			  |Handling Users & Apps Combined Quiries|

<ins>**Serverless Services:**</ins>
|Service         |PORT            |Framwwork        |Description                       
|----------------|----------------|---------------|-----------------------------|
|Event Bus 			|8888         |[Netlify Lambda](https://github.com/netlify/netlify-lambda)          |Handling data passing to microservices.            |

## Database <a name="database"></a>
All data are stored in javascript objects located in relevent services. 

## 3rd Party Apis <a name="third_party"></a>
The application uses [Trello](https://trello.com/) as a third party service. So you will need trello API_KEY, ACESS_TOKEN and the project BOARD_ID to make the app work. 
As reference a `.env.example` is provided in [microservice_backend](https://github.com/DevArifHossain/employee-orbarding-app/tree/develop/microservice-backend/apps) directory.
Visit [https://trello.com/app-key](https://trello.com/app-key) to get your key & token.
