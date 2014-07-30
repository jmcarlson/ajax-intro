var indexController = {
	index: function(req, res) {
		console.log(req.connection.remoteAddress);
		res.render('index');
	}
};

module.exports = indexController;