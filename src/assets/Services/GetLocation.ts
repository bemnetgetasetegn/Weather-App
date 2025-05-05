import { useGeolocation } from "react-use"

export const GetLocation = () => {
    const state = useGeolocation({
        enableHighAccuracy: true
    })

    return {latitude:state.latitude, longitude: state.longitude}
}