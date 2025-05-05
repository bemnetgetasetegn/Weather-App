
export interface current {
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    humidity: number;
    gust_kph: number;
    condition: {
        text: string;
        icon: string;
    };
    wind_dir: string
    uv: number
    cloud: number
}
