import { useQuery } from "@tanstack/react-query";
import APIClients, { Response } from "../Services/apiClients";
import querySetter from "../../Store";

const apiClients = new APIClients<Response>('/current.json')

const useWeather = () => {
    const query = querySetter(s => s.q)
    return useQuery({
    queryKey: ['weather',query],
    queryFn: () => apiClients.get({
        params: {
            q: query
        }
    })
})}

export default useWeather