# YOGA_BACKEND

<h2> Hello all this project is done as an assigment for flex money interview process </h2>

<h2>ER Diagram</h2>

![image](https://user-images.githubusercontent.com/79659114/207399509-47c6aadb-be81-408b-84a4-973967b1b420.png)

<p>Backend is designed in a normalized and simplified manner to accomodate future needs also. Three tables were constructed in this process </p>

<h3>User</h3>

<p> User table contains all the data related to user with primary key as email In future if additional details like phone number,address are neeeded
it can be easily added here </p>

<h3>Batch</h3>

<p> Batch table consists all the details related to batches available with batchId as primary key incremented automaticall on insertion </p>


<h3>Enrollment</h3>

<p>This table is created to serve many to many realation between the other two models here all the details regarding paymentStatus, batchId the user has enrolled are stored 
here the enrollmentId acts as the primary key where as both email and bacth Id acts as foreign key</p>

<h1>Folder Structure </h1>

<p> Directories are divided in such a way that server.js being the top most parent and all the incomoing api are routed towards routes from there it goes on their respective controllers
,controllers make use of their services to complete the request </p>

<p> server.js->routes->controller->services</p>

<p>All schema related data are stored in Models folder, db is configured using db.config file </p>

<h1>Tech Stack Used </h1>

<p> node JS along with express </p>
<p> sequelize ORM for writing queries</p>


<p> This is not reuired for the most case but adding it here for reference </p>
<a href="https://yogi-yoga.onrender.com">Backend Link </a>

<h3>PS : Please try to click login or register two three times backend being a free service it takes time to wake up </h3>
<p>Live demo: <a href="https://iridescent-kringle-652db9.netlify.app/">click here</a></p>
<p>FrontEnd Repo Link <a href="https://github.com/deekshith03/YOGA_FRONT">Repo Link</a></p>

#NOTE DB IS NOT PERSISTENT BEING A FREE SERVICE USERS DATA WILL BE DELETED AFTER SOME TIME
