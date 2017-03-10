import Express from 'express';

let app = Express();
let i=0;
app.set('port', process.env.PORT || 3001);

app.get('/api/test', function (req, res, next) {
  i=i+1;
  res.send('hello world'+i);
});

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});