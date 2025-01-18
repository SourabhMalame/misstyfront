import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const adminLogin = async (adminData) => {
    console.log("from Admin", adminData)
    try {
        const responce = await axios.post(`${API_URL}/admin/adminlogin`, adminData);
        console.log(responce.data)
        return responce.data;
    } catch (error) {
        console.error("Error during admin login:", error);
        throw error;
    }
};
