var express = require('express'),
    http    = require('http'),
    path    = require('path'),
    app     = express(),
    server  = http.createServer(app);

app.set('port', process.env.PORT || 3000);

app.use('/', express.static(path.join(__dirname , 'public')));
app.use('/bower_components', express.static(path.join(__dirname , 'bower_components')));

server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
