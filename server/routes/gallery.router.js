const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    let queryString = `UPDATE "imagelist" 
                        SET "likes" = "likes" + 1
                        WHERE "id" = $1`
    
    let id = req.params.id;
    pool.query(queryString, [id])
    .then((result) => {
        res.sendStatus(200);

    }).catch((error) => {
        console.error(`Error making query ${queryString}`, error);  
    })

}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let queryString = `SELECT * FROM "imagelist"
                        ORDER BY "id" ASC
    `;
                    
    pool.query(queryString)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.error(`Error making query ${queryString}`, error);
        res.sendStatus(500);
    })
})



module.exports = router;