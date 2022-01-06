import { response } from "express";
import { API } from "../utils/API";

class InterbankBoundary {

    public async query(url : string, data: {}) {
        try {
            const response = await API.patch(url, data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

}

export { InterbankBoundary };