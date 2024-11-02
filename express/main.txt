const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}))
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/examTpBase').then(console.log('Connected to MongoDb'))
const Schema = mongoose.Schema;

//1 Define a schema for the  collection
const medecinShema = new Schema({
    nom : String,
    wilaya : String,
    commune : String,
});
//2 Define a model for the  collection
const Medecin = mongoose.model('medecin', medecinShema);


app.post("/addMedecin", async (req, res) => {
    const body = req.body;
    
    try {
        const newMed = new Medecin(body);
        await newMed.save();
        console.log('Medcin added:', newMed);
        res.json(newMed);
    } catch (err) {
        console.error('Error adding user:', err);
        res.status(500).send("erreur d'ajouter Médecin");
    }
});

app.get("/nomMedecin/:nom", async (req, res) => {
    const nom = req.params.nom; 
    try {
        Medecin.find({ 'nom': nom }).then(function(e){
            res.json(e)
        })

    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
app.get("/Medecin/:word", async (req, res) => {
    const word = req.params.word; 
    try {
        Medecin.find({$or :[ { 'nom': word },{'wilaya': word}]}).then(function(e){
            res.json(e)
        })

    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});





app.listen(4500);
console.log("serveur http démarré sur le port 4500");