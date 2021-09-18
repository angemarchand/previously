const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
require('dotenv').config();

const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());



app.post('/login', function (req, res) {
    axios.defaults.headers.common['x-betaseries-key'] = "1a4116396d60";
    axios.post("https://api.betaseries.com/members/oauth",{
    }).then(response => {
        let key = response.data.oauth.key;
        res.send(key);
    })
})
app.post("/logout", function (req, res) {
    axios.defaults.headers.common['Authorization'] = "1a4116396d60" + token;
    axios.post("https://api.betaseries.com/member/destroy", {
    }).then(response => {
        console.log(response)
        res.send(response)
    })
})



// Pour ajouter au favori une serie 
app.post('/addarchive', function (req, res) {
    let id = req.body.id_serie
    let user_token = req.body.user_token
    axios.defaults.headers.common['x-betaseries-key'] = "1a4116396d60";
    axios.defaults.headers.common['Authorization'] = user_token;
    axios.post("https://api.betaseries.com/shows/favorite",{
        id : id
    }).then(response => {
        res.send('ok')
    })

    
});

// Pour rechercher toutes les infos sur une serie
app.get("/research", function (req, res) {
    let id = req.body.id
    axios.defaults.headers.common['x-betaseries-key'] = "1a4116396d60";
    axios.get("https://api.betaseries.com/shows/display?id=" + id.toString(), {
    }).then(response => {
        res.send(response.data)
    })
})

// Pour recuperer les 20 premiere serie 
app.get('/series', function (req, res) {
    axios.defaults.headers.common['x-betaseries-key'] = "1a4116396d60";
    axios.get('https://api.betaseries.com/search/shows', {
    }).then((response) => {
        let tab = response.data.shows
        return res.status(200).send(tab)
    }).catch((err) => {
        console.log(err)
    })
})


app.get('/showSerie', function (req, res) {
    let data = req.query
    axios.defaults.headers.common['x-betaseries-key'] = "1a4116396d60";
    axios.get('http://api.betaseries.com/search/shows?v=3.0&text=' + data.query, {
    }).then((response) => {
        let tab = response.data.shows
        return res.status(200).send(tab)
    }).catch((err) => {
        console.log(err)
    })
})


// Pour recuperer tous les episode d'une saison
app.post("/showAll", function(req, res) {
    let id_season = req.body.id_season
    let id_serie = req.body.id_serie
    axios.defaults.headers.common['x-betaseries-key'] = "1a4116396d60";
    axios.get("https://api.betaseries.com/shows/episodes?id=" + id_serie.toString() + "&season=" + id_season.toString(), {
    }).then(response => {
        res.send(response.data)
    })
 })


module.exports = app;