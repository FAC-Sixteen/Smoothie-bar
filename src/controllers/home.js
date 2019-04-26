
const home = (req, res) => {

    res.render('home', { home : 'true'});
    res.status(200);
}

module.exports = home;