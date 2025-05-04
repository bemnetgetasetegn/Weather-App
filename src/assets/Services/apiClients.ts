import axios from "axios";
import { location } from "../Entities/location";
import { current } from "../Entities/current";
import { forcast } from "../Entities/forcast";


const apiInstance = axios.create({
    baseURL: 'https://api.weatherapi.com/v1',
    params:{
        key: '77181752f7174ea895f155437252502',
        q: `kenya`
    }
});

export interface Response {
    location: location
    current: current
    forecast: forcast
}

class APIClients<T> {
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint
    }

    get = () => {
       return apiInstance
            .get<T>(this.endpoint)
            .then(res => res.data);
    }
}

export default APIClients