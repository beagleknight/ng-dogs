var express = require('express'),
    http    = require('http'),
    path    = require('path'),
    app     = express(),
    server  = http.createServer(app);

app.set('port', process.env.PORT || 3000);

app.use('/', express.static(path.join(__dirname , 'public')));
app.use('/bower_components', express.static(path.join(__dirname , 'bower_components')));

var dogs = [
    {
        id: "boira",
        name: "Boira"
    },
    {
        id: "dexter",
        name: "Dexter"
    }
];

app.get('/dogs', function (req, res) {
    res.send(dogs);
});

app.get('/dogs/:id', function (req, res) {
    res.send(dogs.filter(function (dog) {
        return dog.id === req.params.id;
    })[0]);
});

server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
