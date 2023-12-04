# Frontend App README

This is the README file for the frontend app for the Employee Management system aka Assignment 2.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)

## Description

This is a simple Employee management system designed to add, update, and delete employees for an orgnaization. 

## Features

- Login
- Signup
- Add Employee
- Employee List
- Edit Employee
- Delete Employee
- See Employee Details

## Getting Started

### Prerequisites

- As this is only the front end of the application the clear prerequisite is the backend app which works with MongoDB. Further than that the typical requirements such as Node.js are needed as well.

### Installation

1. Clone both this and the backend to your local machine
2. Run npm install for both apps to ensure all dependencies are added
3. Run npm start for the backend on terminal. 
4. Run npm start for the front end on terminal.
5. Alternatively you could run the front end via docker by building from the Dockerfile in assignment2_reactjs and running the container. 

NOTE: You must be in the correct folder when running npm commands

### Usage
- Login: To login you simply enter a valid username and password. In case of failed login you will be told the issue ie wrong password
- Signup: For the signup you can click the button from the login page and signup
- Employee List: This is the default page after logging in. You will be told all the employees in the system and have them listed one after another with their basic details. Within the same box and underneath their details there are employee specific options to see their details, update their info, or delete. Deletion will have prompt you to double confirm in case of an accidental click. As well the option to create an employee is above the employee list.
- Create/Edit Employee: You will be sent to a form with various information on the employee to fill out. Once done you can submit and if accepted you will be redirected back to Employee List.
- Employee Details: Standard page with the availability to see the employee details.
