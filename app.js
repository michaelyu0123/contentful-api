import express from 'express';
import contentful from './api'
import Axios from 'axios';
import config from './config';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import _ from 'lodash';


const app = express();

//Set the view engine to ejs templating engine.
app.set('view engine', 'ejs');

//Convert sass to public.
app.use(sassMiddleware({
	src: path.join(__dirname, 'sass'),
	dest: path.join(__dirname, 'public')
}));

//Calls the public folder to route all the static files
app.use(express.static('public'));


app.get('/', function (req, res) {
	const contentTypeUrl = config.serverUrl + '/api/entities';
	res.render('index');
});

app.use('/api', contentful);

app.use(express.static('public'));

app.listen(config.port,config.host, () => {
  console.log('listening on port ' + config.port + '.');
})