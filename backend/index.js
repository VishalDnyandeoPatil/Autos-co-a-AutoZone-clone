const express = require ('express');
const {connection} = require('./config/db');
const {authenticator} = require('./middleware/authentication');
const {userRouter} = require('./routes/userRoutes')
