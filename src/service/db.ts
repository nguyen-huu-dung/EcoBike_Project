import * as mysql from 'mysql';
import { Configs } from '../utils/Configs';

class Database {

    private static conn;
    
    public static getConnectDb() : any {
        if(this.conn === null) {
            this.conn = mysql.createConnection({
                host: Configs.HOST,
                user: Configs.USER,
                password: Configs.PASSWORD,
                database: Configs.DATABASE,
                port: Configs.PORT
            })
        }
        return this.conn;
    }
}

export { Database };