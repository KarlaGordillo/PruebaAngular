export class CityWeather {

    CityName: string;
    Humidity: string;
    Pressure: string;
    Temp: string;
    TempMin: string;
    TempMax: string;
    WheatherIcon: string[];
    Wind: string;

    /**
     * Creates a CityWeather entity
     */
    constructor(cityName: string, humidity: string, pressure: string, temp: string, tempMin: string, tempMax: string, wheatherIcon: string[], wind: string) {

        this.CityName = cityName;
        this.Humidity = humidity;
        this.Pressure = pressure;
        this.Temp = temp;
        this.TempMin = tempMin;
        this.TempMax = tempMax;
        this.WheatherIcon = wheatherIcon;
        this.Wind = wind;
    }


}