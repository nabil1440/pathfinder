# pathfinder installation guide

### Make sure to have before installation: 
- Node JS & NPM 
- PostgreSQL 
- Sequelize 
- Sequelize CLI, make sure to install it globally 
- A text editor of your choice, preferably VS Code 

### Installation process: 
- Clone the repo 
- run **npm install** both in the **methalox** & **starship** directories, running that in the root directory is optional 
- Create a baseUrl.js file in "startship/utils" folder with your baseUrl in it, make sure to use **export default baseUrl;** 
- Create a database in PostgreSQL 
- Put these varialbes in a **.env** file in the **methalox** folder: **TOKEN_SECRET, DB_USERNAME, DB_PASSWORD, DB_NAME** 
- Run this command in the **methalox** folder: **sequelize db:migrate**, this will create the tables in the database 
- Run **npm run dev** in the **methalox** folder, this will expose the API in **http://localhost:5000** 
- Download an HTTP client like Postman or Insomnia and use the **signup** route to create a new user in the database 
- Now go to the **starship** folder and run **npm start**
- Now that both of your dev servers are running, you can use pathfinder!

### You can also deploy this to Herkou in production mode for easier accessibility, that's what I'm doing...
