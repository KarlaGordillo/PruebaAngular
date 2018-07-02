import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { CityWeather } from '../Models/CityWeather';
@Injectable()
export class Services {
    constructor(
        public http: HttpClient
    ) { }

    headers: HttpHeaders = new HttpHeaders({ 'Accept': 'application/json;odata=verbose' });
    options = ({ headers: this.headers });


    getWeatherByCity(city: string) {
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a7e17c06608591b9ec5041a08c712369&units=metric"
        return this.http.get(url, this.options);
    }

    getIcon(icon: string) {
        let url = "http://openweathermap.org/img/w/" + icon + ".png";
        return url;
    }

    addCityWeather(cityName: string, weather: CityWeather): void {
        let cityData: CityWeather[] = [];
        if (localStorage.getItem(cityName) === null) {
            cityData.push(weather);
        }else{
            cityData = JSON.parse(localStorage.getItem(cityName));
            cityData.unshift(weather);
        }
        localStorage.setItem(cityName, JSON.stringify(cityData));
    }

    getCityWeather(cityName: string): CityWeather[] {
        let cityWeather = [];
        if(localStorage.getItem(cityName) != null){
            cityWeather = JSON.parse(localStorage.getItem(cityName));
        }
        return cityWeather;
    }
}

// api.openweathermap.org/data/2.5/weather?q=Londona7e17c06608591b9ec5041a08c712369
