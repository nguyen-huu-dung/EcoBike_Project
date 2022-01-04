import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import router from './routers';

class App {
    
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }
    
    private config(): void {
        this.app.use(bodyParser.urlencoded({extended: true})); // use data json
        this.app.use(bodyParser.json());
        this.app.use(express.static('assets'));
        this.app.set('view engine', 'ejs'); // set template engine is ejs
        this.app.set('views', path.join(__dirname, 'views/pages')); // set path folder views
        this.app.use(router);
    }
}

export default new App().app;