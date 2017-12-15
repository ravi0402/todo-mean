**Clevero Task Management Todo App**

 - Sign Up
 - Sign In
 - Users can add Tasks in the list and also specify their ‘Due Date’, and set the ‘Status’ of the tasks.

**Tech Stack used**[MEAN Stack]

 - Front End : AngularJS, Angular-Material-UI 
 - Back End : NodeJS
 - Database : NoSQL (MongoDB)

**Deployment Instructions** [System must have nodejs, npm, mongo and bower installed]

 - git clone https://github.com/ravi0402/todo-mean.git
 - In models/userModel.js add db_name [ e.g:  var db = mongoose.connect("mongodb://localhost:27017/db_name".........  ]
 - Run following commands [in Linux]
     - cd todo-mean
     - sudo npm install
     - cd public
     - bower install [in order to get root access, install using : (bower --allow-root install )] 
     - cd .. && node bin/www

Open browser and hit: **http://localhost:7000/**

Thanks.