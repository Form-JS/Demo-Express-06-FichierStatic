const homeController = {

    index: (req, res) => {
        res.render('home/index');
    },

    contact: (req, res) => {
        res.render('home/contact');
    },

    contactPost: (req, res) => {
        res.sendStatus(501);
    }
};

module.exports = homeController;