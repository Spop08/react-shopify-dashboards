class Config {
    constructor() {
        this.config = {};
        this.configReady = false;
        // Deploy Url
        // this.BACKEND_API_URL = "http://ec2-35-182-231-236.ca-central-1.compute.amazonaws.com:8000/";
        // Local Url
        this.BACKEND_API_URL = "http://192.168.11.23:8001/";
    }
}

export default (new Config());