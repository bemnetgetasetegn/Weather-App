import { useEffect } from "react"
import querySetter from "../../Store"
import { GetLocation } from "../Services/GetLocation"

const useLocationHandler = () => {
    const {latitude, longitude} = GetLocation()
    const setQuery = querySetter(s => s.Query)

    useEffect(() => {
        if(latitude && longitude){
            setQuery(`lon=${longitude}&lat${latitude}`)
        }
    }, [latitude, longitude, setQuery])

}

export default useLocationHandler