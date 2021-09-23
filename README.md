# SchoolWebAPI


## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
5. [FAQs](#faqs)


### General Info
***
SCHOOLWEBAPI  its basically perform CURD operation in which we can create, retrieve, update, delete and find.
Firstly, I start with an Express web server. Next, we add configuration for PostgreSQL database, create Student model and User model with BookShelf, write the controller. 
Then we define routes for handling all CRUD operations (including custom finder).


## Technologies
***
[ExpressJs] (https://expressjs.com/) : Version 4.17.1
[KnexJs] (https://knexjs.org/) : Version 0.95.11
[BookshelfJs](https://bookshelfjs.org/) : Version 1.2.0
[PostgreSQL] (https://www.postgresql.org/) : Version 8.7.1


## Installation
***
$ git clone https://github.com/vishal6108/SCHOOLWEBAPI.git
$ cd ../path/to/the/file
$ npm install express knex bookshelf pg --save

## Note .
You should install PostgreSQL in your machine first. 
The installation instructions can be found at Official PostgreSQL installation manual.
I didn't use Knex Migration for database so we do have a create database manually.

