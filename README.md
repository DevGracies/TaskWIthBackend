#task app

initialize npm package json file in cmd: npm init

install necessary packages for a start packages:
npm i... express, cors, dotenv, http-status
npm i -dev... morgan, colors, nodemon

write server script in server.js and setup an express server

start app cmds: prod: npm start dev: npm run dev

set up middlewares using app.use()

test the endpoint on postman
-create mongodb atlas db account
-connect app to db using manggse connection
-setup app schema
-our task app: major player and relationships
USERS, TASK
user field: id, role (admin, default, supervisor), firstName, lastName, phoneNumber,userCode
task field: id, userId(reference to user model)
