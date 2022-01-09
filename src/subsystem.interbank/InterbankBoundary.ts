/**
 * @author Nguyen Huu Dung, Dang Tung Lam
 */
import { response } from "express";
import { API } from "../utils/API";

class InterbankBoundary {
    /**
     * Phương thực thực hiện truy vấn đến interbank
     * @param url : Đường dẫn
     * @param data : Dữ liệu
     * @returns 
     */
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