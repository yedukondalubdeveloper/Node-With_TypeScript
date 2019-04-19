import express from 'express';
import path from 'path';
import methodOverride from 'method-override';

// Routes
import IndexRoutes from './routes';
import UsersRoutes from './routes/users';

// Initializations
const app = express();
require('./database');

// settings
app.set('port', process.env.PORT || 4000);
app.use(express.static(__dirname+'/public'))
app.set('view engine','ejs')
app.set('views', './src/views')

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride());

// Routes
app.use(IndexRoutes);
app.use('/users', UsersRoutes);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the Server
app.listen(app.get('port'), () => {
    console.log(`Server on port`, app.get('port'));
});