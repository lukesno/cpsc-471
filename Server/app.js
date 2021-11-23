var express = require('express');
var app = express();

// --------------------------------------------------------------------------------------------- //


/* User Authentication API
*  Request Type: GET
*  
*  User provides: username, password
*
*  Notes:
*  - ID for user returned if provided username and password were found in the database
*/
app.get("/auth", async (req, res) => {
})


/* User Signup API
*  Request Type: POST
*  
*  User provides: username, password, address, country, province
*
*  Notes:
*  - Returns a error if username already in use.
*/
app.post("/signup", async (req, res) => {
})


// --------------------------------------------------------------------------------------------- //


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
app.get('/convert', (req, res) => {
})


/* Search Property API
*  Request Type: GET
*  
*  User provides: 
*  -> either "near me" or "near a selected school"
*  -> distance range
*
*  Notes:
*  - Properties are returned based on distance (km) calculated between specified user location and potential properties.
*/
app.get('/search', (req, res) => {
})


// --------------------------------------------------------------------------------------------- //

/* Search Property API
*  Request Type: GET
*  
*  User provides: 
*  -> either "near me" or "near a selected school"
*  -> distance range
*
*  Notes:
*  - Properties are returned based on distance (km) calculated between specified user location and potential properties.
*/
app.get('/messages/:', (req, res) => {
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
