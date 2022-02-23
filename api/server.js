const express = require('express')
const app = express()



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



let dbName = "pangolin";
let db;
client.connect(err => {

    db = client.db(dbName);
    if (err != null) {
        console.log("erreur: " + err);
    } else {

    }
});


app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
/*
    //res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        // allowed XHR methods  
        res.header('Access-Control-Allow-Methods', 'GET, PATCH,  POST, DELETE');
        res.send();
    });
*/
});


app.listen(8080, () => {
    console.log("api à l'ecoute");
})
// lise des utilisateurs
app.get('/users', async (req, res) => {
    try {
        const docs = await db.collection('users').find({}).toArray();

        res.status(200).json(docs);
    } catch (err) {
        console.log(err);
        throw err;
    }
})
// 1 utilisateur
app.get('/users/:login', async (req, res) => {
    const login0 = req.params.login;
    const mdp0 = req.params.mdp;
    console.log("/users/" + login0 );
    try {
        var docs = await db.collection('users').find({ login: login0 }).toArray()
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
})

app.get('/users/:login/:mdp', async (req, res) => {
    const login0 = req.params.login;
    const mdp0 = req.params.mdp;
    console.log("/users/" + login0 + "/" + mdp0);
    try {
        var docs = await db.collection('users').find({ $and: [{ login: login0 }, { mdp: mdp0 }] }).toArray()
        res.status(200).json(docs[0] != undefined)
    } catch (err) {
        console.log(err)
        throw err
    }
})

app.get('/amies/:login', async (req, res) => {
    const login0 = req.params.login;
    try {
        const docs = await db.collection('amie').find({ $or: [{ amie1: login0 }, { amie2: login0 }] }).toArray();
        var list = []
        docs.forEach(element => {
            if (element.amie1 == login0) {
                list.push(element.amie2);
            } else {
                list.push(element.amie1);
            }
        });
        res.status(200).json(list);
    } catch (err) {
        console.log(err);
        throw err;
    }
})

app.post('/amies', (req, res) => {
    console.log(req.body);
    const docs = db.collection('amie').insertOne(req.body);
    res.status(200).json(docs)
})

app.delete('/amies/:login/:amie', (req, res) => {
    const login0 = req.params.login;
    const amie0 = req.params.amie;
    const docs = db.collection('amie').deleteOne({ $or: [{ $and: [{ amie1: login0 }, { amie2: amie0 }] }, { $and: [{ amie1: amie0 }, { amie2: login0 }] }] });
    res.status(200).json(docs)
})

app.post('/users', (req, res) => {
    const docs = db.collection('users').insertOne(req.body);
    res.status(200).json(docs)
})

app.patch('/new_role/:login/:role', (req, res) => {
    const login0 = req.params.login;
    const role0 = req.params.role;
    const docs = db.collection('users').updateOne({ login: login0 }, { $set: { role: role0 } });
    res.status(200).json(docs);
})

app.patch('/new_mdp/:login/:mdp', (req, res) => {
    const login0 = req.params.login;
    const mdp0 = req.params.mdp;
    const docs = db.collection('users').updateOne({ login: login0 }, { $set: { mdp: mdp0 } });
    res.status(200).json(docs);
})



