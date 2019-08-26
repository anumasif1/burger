# burger
[![HitCount](http://hits.dwyl.io/anumasif1/burger.svg)](http://hits.dwyl.io/anumasif1/burger)

This is a burger logger app with MySQL, Node, Express, Handlebars and a homemade ORM!

![Burger App display](webpage.png)

**How it works?**
Customer can enter name of the burger he/she wants and press submit button. Once submitted, the name is updated in sql file **schema.sql**. The name is also displayed on the webpage along with **devour-it** button. This section is divide in 2 columns "Waiting to be devoured!" and "Devoured!". When the user clicks "devour-it" button that burger name is moved to "devoured!" section. Database is automatically updated with each action.  

**-------------------------------------------------------------------**

This application is base on MVC model. Following is the format for this app:

<pre>
-Burger
    -config
        -connection.js
        -orm.js
    -controllers
        -burgers_controller.js
    -db
        -schema.sql
        -seeds.sql
    -models
        -burger.js
    -public
        -assets
            -css
                -style.css
            -images
            -js
                -burgers.js
    -views
        -layouts
            -main.handlebars
        -partials
            -burgers
                -burgers-devour.handlebars
                -burgers-devoured.handlebars
            -index.hanldebars
    -server.js
</pre>
**-------------------------------------------------------------------**
        -
**NPM Packages Installed:**
* express
* express-handlebars
* mysql
* init

**-------------------------------------------------------------------**

