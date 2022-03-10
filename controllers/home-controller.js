const { contactValidator } = require('../form-validation/contact-validator');

const homeController = {

    index: (req, res) => {
        res.render('home/index');
    },

    contact: (req, res) => {
        res.render('home/contact');
    },

    contactPost: (req, res) => {
        if (!contactValidator.isValidSync(req.body)) {
            res.redirect('/contact');
            return;
        }

        // Cas pratique => Save in Database
        console.log(req.body);
        res.render('home/contactResponse');
    }
};

module.exports = homeController;