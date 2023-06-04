import axios from "axios";

export default axios.create({
    //baseURL:'https://6dbb-121-200-5-239.au.ngrok.io',
    baseURL:'http://localhost:8080',
    //headers:{"ngrok-skip-browser-warning":"true"}
    headers: {"Access-Control-Allow-Origin": "*"}
})