# NextJS with Redux + Rest API (Rest API Generator) + TailwindCSS

## RRWRA - React Redux with Rest API

How to connect with our REST API?

You can go to retool.com to create our API on the fly rather we create our own backend project.
This will help to understand redux concept faster rather than putting our time to creating our 
own backend. Only use website to create your REST API if you're focusing more on Frontend side.

Link : https://retool.com/api-generator/

### Build Your Own Dataset

| Column Title | Data Type|
| :---: | :---: |
| id | number |
| title | string |
| description | string |
| published | string |
| status | boolean |

### React Client consumes the following Web API:

| Methods | URLs| Actions |
| :---: | :---: | :---: |
| POST | /api/tutorials | create new Tutorial|
| GET | /api/tutorials | retrieve  new Tutorial|
| GET | /api/tutorials/:id	 | retrieve a Tutorial by :id |
| PUT | /api/tutorials/:id	 | update a Tutorial by :id |
| DELETE | /api/tutorials/:id	 | delete a Tutorial by :id |
| DELETE | /api/tutorials | delete all Tutorials |
| GET | /api/tutorials?title=[keyword] | find all Tutorials which title contains keyword |

Reference for this project.
https://www.bezkoder.com/react-hooks-redux-crud/


