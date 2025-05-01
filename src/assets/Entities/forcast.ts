interface forCastDay {
    date: string,
    day: {
        maxtemp_c: number
        maxtemp_f:number
        mintemp_c:number
        mintemp_f:number
        totalprecip_mm: string,
    }, 
    hour: {
        time: string,
        temp_c: number,
        temp_f: number,
        condition: {
            text: string,
            icon: string
        },
        wind_dir: string
        humidity: number
        cloud: number
    }[]
}

export interface forcast{
    forecastday: forCastDay[] 
}