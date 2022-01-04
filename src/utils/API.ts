import axios from 'axios';

class  API {

    public static PAY_URL : string = "https://ecopark-system-api.herokuapp.com/api/card/processTransaction";
    public static REFUND_URL : string = "https://ecopark-system-api.herokuapp.com/api/card/processTransaction";
    public static VERSION : string = "1.0.1";
    public static APP_CODE : string = "DJJIeH7fxjg=";
    public static HASH_CODE : string = "08c2b13b3e32eb6dc41ff0b253748ae8";
    public static PAY_COMMAND : string = "pay";
    public static REFUND_COMMAND: string = "refund";
    
    public static async patch(url : string, data : {}) {
        const response = await axios.patch(url, data);
        return response;
    }

}

export { API };