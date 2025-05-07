import { useQuery } from "@tanstack/react-query";
import APIClients, { Response } from "../Services/apiClients";
import querySetter from "../../Store";

const apiClients = new APIClients<Response>('/forecast.json')

const useForcast = () => {
    const query = querySetter(s => s.q)
    return useQuery({
    queryKey:['forcast', query],
    queryFn: () => apiClients.get({
        params: {
            q: query
        }
    })
})}

export default useForcast

