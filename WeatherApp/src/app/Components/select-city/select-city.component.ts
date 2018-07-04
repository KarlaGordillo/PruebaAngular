import { Component, OnInit } from '@angular/core';
import { Constants } from '../../Constants/constants';
import { Services } from '../../Services/services';
import { CityWeather } from '../../Models/CityWeather';
import { Icon } from '../../Models/Icon';

@Component({
  selector: 'select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.scss'],
  providers: [Constants, Services]
})
export class SelectCityComponent implements OnInit {

  cities: string[];
  weatherResult: CityWeather;
  selectedCity: string;
  constructor(
    private constants: Constants,
    private httpApi: Services
  ) { }

  ngOnInit() {
    this.cities = this.constants.cities;
    this.selectedCity = this.cities[0];
    this.getWeather(this.selectedCity);
  }

  getWeather(city: string) {
    this.createHistorial(city);
    let icons: Icon[] = [];
    this.httpApi.getWeatherByCity(city).subscribe(
      result => {
        result["weather"].forEach(element => {
          let icon: Icon = new Icon(element.icon, element.id);
          icons.push(icon);
        });
        this.weatherResult = new CityWeather(result["name"], result["main"].humidity, result["main"].pressure, result["main"].temp, result["main"].temp_min, result["main"].temp_max, icons, result["wind"].speed);
        this.httpApi.addCityWeather(city, this.weatherResult);
      }
    );

  }

  createHistorial(city: string) {
    let ciudad = city;
    setTimeout(() => {
      if (this.selectedCity == ciudad) {
        this.getWeather(this.selectedCity);
      }
    }, 120000);
  }


}
