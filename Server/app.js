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
app.post("/auth", async (req, res) => {
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


/* Property Email API
*  Request Type: GET
*  
*  User provides: Property ID
*
*  Notes:
*  - Returns email of landlord of selected property
*/
app.get('/property/email', (req, res) => {
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
app.get('/distance', (req, res) => {
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
})


// --------------------------------------------------------------------------------------------- //

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
