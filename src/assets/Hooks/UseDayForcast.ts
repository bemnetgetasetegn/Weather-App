import { useQuery } from "@tanstack/react-query";
import APIClients from "../Services/apiClients";
import querySetter from "../../Store";
const apiClients = new APIClients('/forecast.json')


const useDayForcast = () =>{
    const q = querySetter(s=>s.q)
   return useQuery({
    queryKey: ['dayForcast', q],
    queryFn: () => apiClients.get({
        params: {
            days: 5
        }
    })
})}

export default useDayForcast