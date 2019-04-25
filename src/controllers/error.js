const error = (req, res) => {

    res.render('error');
    res.status(404);
}

module.exports = error;