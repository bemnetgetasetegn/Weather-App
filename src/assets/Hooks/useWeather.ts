import { useQuery } from "@tanstack/react-query";
import APIClients, { Response } from "../Services/apiClients";

const apiClients = new APIClients<Response>('/current.json')

const useWeather = () => useQuery({
    queryKey: ['weather'],
    queryFn: apiClients.get
})

export default useWeather