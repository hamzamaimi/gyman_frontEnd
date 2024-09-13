import axios from "axios";

export const getBase64LogoApi = async () => {
    const response = await axios.get('http://ringadoragyman.com:8080/api/tenant/base64logo');
    return response.data;
}
