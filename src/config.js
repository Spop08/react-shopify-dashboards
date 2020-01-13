class Config {
    constructor() {
        this.config = {};
        this.configReady = false;
        // Deploy Url
        
        this.BACKEND_API_URL = "http://ec2-13-59-196-27.us-east-2.compute.amazonaws.com:8001/";
        // Local Url
        // this.BACKEND_API_URL = "http://192.168.0.168:8001/";
    }
}

export default (new Config());