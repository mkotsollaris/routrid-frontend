var express = require('express')
const request = require('request')
var bodyParser = require('body-parser')
require('dotenv').config()
var app = express()
 
const headers = {
  'x-trulioo-api-key': `${process.env.API_KEY}`,
  "Content-Type": "application/json",
  "User-Agent": "trulioo-proxy/1.0.0.0",
  "rejectUnauthorized": false,
}

app.use(bodyParser.json({ limit: '50mb' }))
app.use(function (_, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/api/getcountrycodes', (_, res) => {
  
  
  request({ method: 'GET', url: process.env.TRULIOO_BASE_URL + '/configuration/v1/countrycodes/Identity%20Verification', headers: headers},
    (error, _, body) => {
      if (error) {
        throw new Error(error)
      }

      res.setHeader('Content-Type', 'application/json')
      res.send({
        response: body
      })
    })
})

app.get('/api/getrecommendedfields/:countryCode', (req, res) => {
  request({ method: 'GET', url: process.env.TRULIOO_BASE_URL + '/configuration/v1/recommendedfields/Identity%20Verification/' + req.params.countryCode, headers: headers },
    (error, _, body) => {
      
      if (error) {
        throw new Error(error)
      }

      

      res.setHeader('Content-Type', 'application/json')
      res.send({
        response: body
      })
    })
})

app.get('/api/getcountrysubdivisions/:countryCode', (req, res) => {
  request({ method: 'GET', url: process.env.TRULIOO_BASE_URL + '/configuration/v1/countrysubdivisions/' + req.params.countryCode, headers: headers},
    (error, _, body) => {

      if (error) {
        throw new Error(error)
      }
      
      
      res.setHeader('Content-Type', 'application/json')
      res.send({
        response: body
      })
    })
})

app.get('/api/getdetailedconsents/:countryCode', (req, res) => {
  request({ method: 'GET', url: process.env.TRULIOO_BASE_URL + '/configuration/v1/detailedConsents/Identity%20Verification/' + req.params.countryCode, headers: headers },
    (error, _, body) => {
      if (error) {
        throw new Error(error)
      }


      
      res.setHeader('Content-Type', 'application/json')
      res.send({
        response: body
      })
    })
})

app.post('/api/verify', (req, res) => {
  request({
    method: 'POST', url: `${process.env.TRULIOO_BASE_URL}/verifications/v1/verify`, body: req.body, headers: headers, json: true},
    (error, _, body) => {
      if (error) {
        throw new Error(error)
      }

      res.setHeader('Content-Type', 'application/json')
      res.send({
        response: body,
      })
    })
})


module.exports = app