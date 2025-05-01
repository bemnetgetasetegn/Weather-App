import { useQuery } from "@tanstack/react-query";
import APIClients, { Response } from "../Services/apiClients";

const apiClients = new APIClients<Response>('/forecast.json')

const useForcast = () => useQuery({
    queryKey:['forcast'],
    queryFn: apiClients.get
})

export default useForcast

