const { response } = require('express');
var express = require('express');
var app = express();
var axios = require('axios');
const cors = require('cors');
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions));

// API key for Google's Geocoding API 
const API_KEY = "AIzaSyBPt450BqjohjdB1l0rded7zyoXKbTc2II";
const geolib = require('geolib');


// Database - Sqlite

const sqlite3 = require('sqlite3').verbose()
const md5 = require('md5');
const { reset } = require('nodemon');

const DBSOURCE = 'db.sqlite'


let db = new sqlite3.Database('./ensf471.db', (err) => {
    if(err) {
       // error occured, cannot open
       console.log(err.message)
    } 

    console.log("Connected to db!")
 })


// --------------------------------------------------------------------------------------------- //

/* User Authentication API
*  Request Type: GET
*  
*  User provides: username, password
*
*  Notes:
*  - ID for user returned if provided username and password were found in the database
*/
app.get("/user/:email/:password", async (req, res) => {
   // username, password checked in database
   // check in database line

   const email = req.params.email
   const password = req.params.password

   var sql = "select * from user"
   // var sql2 = "INSERT INTO auth (username, password) VALUES ('abc123', 'abc123')"
   var params = []

   const data = {}
   data.isAuthentic = false;

   db.all(sql, params, (err, rows) => {
      if (err) {
         console.log(err.message)
      } 

      console.log(email)
      console.log(password)

      for(let i = 0; i < rows.length; i++){
         if(email == rows[i].email && password == rows[i].password){
            data.isAuthentic = true
            data.user = rows[i]
         }
      }

      res.json({data})
      
      console.log(data)
   })

})


/* User Signup API
*  Request Type: POST
*  
*  User provides: username, password, address, country, province
*
*  Notes:
*  - Returns a error if username already in use.
*/
app.post("/auth", async (req, res) => {

   res.send("Sign up successful!")
})


// --------------------------------------------------------------------------------------------- //


/* Property Search API
*  Request Type: GET
*  
*  User provides: 
*  -> either "near me" or "near a selected school"
*  -> country and province
*  -> distance range
*
*  Notes:
*  - Properties are returned based on distance (km) calculated between specified user location and potential properties.
*/
app.get('/property', (req, res) => {

   let temp = {
      property_id: 136,
      name: "Dalgetty Drive",
      address: "5736 Dalgetty Drive NW",
      country: "Canada",
      province: "Alberta",
      monthly_cost: "500",
      min_term: "4",
      max_term: "16",
      landlord_id: "e7f9851d-d304-4af2-b5d8-33b85abca028",
      img: "https://s3.amazonaws.com/lws_lift/shelter/images/gallery/full/1550964127_calgary_residential_photos_017.jpg"
   }

   res.send(temp)
})


/* Publish Property API
*  Request Type: POST
*  
*  User provides: name, address, country, province, cost, min_term, max_term, landlord_id, image
*
*  Notes:
*  - Used when landlord wants to publish a new piece of property
*  - Uses Property model to populate fields and post to Property schema
*/
app.post('/property/publish', (req, res) => {

   res.send("Property posted.")
})


/* Delete Property API
*  Request Type: DELETE
*  
*  User provides: landlord_id, name of property
*
*  Notes:
*  - Used when landlord wants to delete one of their properties
*/
app.delete('/property/delete/:id', (req, res) => {
   res.send("Deletion successful.")
})


/* Property Email API
*  Request Type: GET
*  
*  User provides: Property ID
*
*  Notes:
*  - Returns email of landlord of selected property
*/
app.get('/property/email', (req, res) => {
   let temp = {
      landlord_id: "e7f9851d-d304-4af2-b5d8-33b85abca028",
      landlord_email: "demo@gmail.com",
   }

   res.send(temp)
})


// --------------------------------------------------------------------------------------------- //


/* Address to Coordinates Converter API
*  Request Type: GET
*  
*  User provides: Address (property address or user address)
*                 This will allow users to find properties nearby themselves, or nearby specific schools.
*                 Admins of the program will be manually inputting coordinates of partnered schools
*
*  Notes:
*  - Used to convert addresses to coordinates (longtitude, latitude) in order to support distance based searches for users
*  - We will be utilizing Google's Geocoding API in order obtain coordinates for specified addresses.
*/
app.get('/convert/:address', async (req, res) => {
   // IMPORTANT: Make sure requests are sent with addresses that are separated with + and not spaces
   // Ex: 2500+University+Dr+NW+CA instead of 2500 University Dr NW CA
   const address = req.params.address

   const URL = "https://maps.googleapis.com/maps/api/geocode/json?" +
   `address=${address}&key=${API_KEY}`;

   try {
      const response = await axios.get(URL);
      res.send(response.data)
   } catch (err) {
      console.log(err);
   }

})

/* Distance Calculation API
*  Request Type: GET
*  
*  Internal API used by GET '/property'
*  Provided with 2 coordinates, return distance between them
*  Property coordinates passed in here will be in the country and province specified by user input (reducing number of calculations per search)
*
*  Notes:
*  - Utilizes Haversine algorithm to convert longitude/latitude distances to km
*/
app.get('/distance/:home/:uni', async (req, res) => {
   // IMPORTANT: Pass in addresses with + instead of spaces
   // Ex: 2500+University+Dr+NW+CA instead of 2500 University Dr NW CA
   try {
      const response1 = await axios.get(`http://localhost:8081/convert/${req.params.home}`)
      const response2 = await axios.get(`http://localhost:8081/convert/${req.params.uni}`)

      const coords1 = response1.data.results[0].geometry.location;
      const coords2 = response2.data.results[0].geometry.location;

      const distance = geolib.getDistance(
         {latitude: coords1.lat, longitude: coords1.lng}, 
         {latitude: coords2.lat, longitude: coords2.lng})

      res.send({meter: distance, kilometer: distance/1000});
   } catch (err) {
      console.log(err);
   }
})


// --------------------------------------------------------------------------------------------- //


/* Post Review API
*  Request Type: POST
*  
*  User provides: Property posting id, user id, review text
*
*  Notes:
*  - Posts review to selected property posting
*/

app.post('/review/:id', (req, res) => {
   res.send("Review successfully posted!")
})


/* Delete Review API
*  Request Type: DELETE
*  
*  User provides: Property posting id, user id, review text
*
*  Notes:
*  - Deletes review of selected property posting
*/

app.delete('/review/:id', (req, res) => {
   res.send("Review successfully deleted!")
})


// --------------------------------------------------------------------------------------------- //

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
