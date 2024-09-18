import axios from "axios";
import { BASE_API_URL } from "../../utils/config";

export const getBase64LogoApi = async () => {
    const response = await axios.get(`${BASE_API_URL}/api/tenant/base64logo`);
    return response.data;
}
