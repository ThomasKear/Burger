# Burger

A full-stack application that allows users to create and "eat" new varieties of burgers. Data is persisted in a MySQL database, allowing users to interact with one another's submissions. The MVC design pattern is implemented, including a manually created ORM.

## **Getting Started**

### **Prerequisites**

* MySQL
* Node.js
### **Installing**

If you would like the view the site from a user's point of you, you have the option of viewing the site on Heroku. It is located at https://shielded-savannah-84890.herokuapp.com/burgers.

If you would like to run the application locally, please ensure that you have installed the Prerequisites, then take the following steps:

Clone this repository to your local machine with git clone
Install NPM dependencies by running npm install in the project directory.
Set up the database from a graphical user interface or from the command line interface.
*GUI
  *Run schema.sql and seeds.sql in your preferred MySQL GUI.
*CLI
  *Navigate to ./db.
  *Run mysql -u root -p.
  *Replace root with your MySQL username if needed.
  *Omit -p if the user does not have a password.
  *Enter your password (if needed).
  *Run source schema.sql.
  *Run source seeds.sql.
*If you use a MySQL username other than root or have a MySQL password, open config/connection.js and update these values on lines 11 and 12.
*Ensure that you are in the root project directory, then run node server.js.
*The application will be running at localhost:3000/

## **Built with**

*Bootstrap (Front-end framework)
*Express.js (Server framework)
*Handlebars (Templating engine)
*Heroku (Cloud platform)
*JawsDB (Heroku database add-on)
*MySQL (RDBMS)
*Node.js (Javascript environment)

Author
Thomas Kearney https://github.com/ThomasKear

