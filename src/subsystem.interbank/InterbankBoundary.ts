import { API } from "../utils/API";

class InterbankBoundary {

    public async query(url : string, data: {}) {
        try {
            const response = await API.patch(url, data);
            return response;
        } catch (error) {
            
        }
    }

}

export { InterbankBoundary };