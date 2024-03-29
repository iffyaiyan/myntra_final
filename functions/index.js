const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51Jt4yCSEEakZ49GqhdSdA3DvGVSamFCTrqcQbFfeY2k9J0b9ILkXnoeHcoikXLxTHOuLJNzypzj3865PTH1uFt4F00Deo8CnpF');



// API

// - API config
const app = express();

// Middleware

app.use(cors({origin: true}));
app.use(express.json());


// - API routes
app.get('/', (request, response) => res.status(200).send('hello world'));

// - Listen Commands
exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
