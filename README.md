# NextJS with Redux + Rest API (Rest API Generator) + TailwindCSS
## RRWRA - React Redux with Rest API

How to connect with our REST API?

You can go to retool.com to create our API on the fly rather we create our own backend project.
This will help to understand redux concept faster rather than putting our time to creating our 
own backend. Only use website to create your REST API if you're focusing more on Frontend side.

Link : https://retool.com/api-generator/

<span style='color:red'>Warning: Your sample API may be deleted if it has not been used in the last 30 days.</span>
<br>
###### Note: (Ctrl + Shift + M) to preview our markdown file in VSCode.

### Build Your Own Dataset

| Column Title | Data Type|
| :---: | :---: |
| id | Number / Post ID |
| title | People / Interest |
| description | Misc / Lorem Ipsum |
| publishedStatus | Boolean |
| createdDate | Dates |
| publishedDate | Dates |

<br>

#### Generated API Endpoint : https://retoolapi.dev/gZ3Hii/reduxAPI

<br>

### Example Endpoint Created Using 'retool'
| Methods | URLs |
| :---: | :---: |
| GET | /gZ3Hii/reduxAPI |
| GET filter | /gZ3Hii/reduxAPI?title=value |
| GET by id | /gZ3Hii/reduxAPI/1 |
| GET paginate | /gZ3Hii/reduxAPI?_page=2&_limit=10 |
| POST | /gZ3Hii/reduxAPI |
| PUT | /gZ3Hii/reduxAPI/1 |
| PATCH | /gZ3Hii/reduxAPI/1 |
| DELETE | /gZ3Hii/reduxAPI/1 |

<br>

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


