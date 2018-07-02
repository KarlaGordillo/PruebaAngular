import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Services } from '../../Services/services';
import { CityWeather } from '../../Models/CityWeather';


@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
  providers: [Services]
})
export class DisplayComponent implements OnInit, OnChanges {
  @Input() WeatherResult: CityWeather;
  cityWeather: CityWeather = new CityWeather("", "", "", "", "", "", [""], "");
  dataWeather: CityWeather[] = [];
  constructor(
    private httpApi: Services
  ) { }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.WeatherResult != undefined){
      this.cityWeather = this.WeatherResult;
      for(var i=0; i < this.cityWeather.WheatherIcon.length; i++){
        this.cityWeather.WheatherIcon[i] = this.httpApi.getIcon(this.cityWeather.WheatherIcon[i]);
      }
      this.dataWeather = this.httpApi.getCityWeather(this.cityWeather.CityName);
    }   
  }

}
