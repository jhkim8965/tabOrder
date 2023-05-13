// Initialize default variables
//-------------------------------------------------------------------
const express = require('express');
var router = express.Router();
var path = require('path');
// main.use(express.static(path.join(__dirname, '../views')));


// Define routes
//-------------------------------------------------------------------
// router.get('/:form', (req, res) => {
//     var mainHtmlPath = path.resolve(__dirname + '/../views/html/main.html');
//     res.sendFile(mainHtmlPath);
// });
router.get('/:form', (req, res) => {
    res.render('html/main', { form : req.params.form }); 
});

module.exports = router;