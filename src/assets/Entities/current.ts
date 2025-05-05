
export interface current {
    last_updated: string;
    country: string
    temp_c: number;
    temp_f: number;
    is_day: number;
    humidity: number;

    condition: {
        text: string;
        icon: string;
    };
    wind_dir: string
    wind_kph: number
    uv: number
    cloud: number
}
