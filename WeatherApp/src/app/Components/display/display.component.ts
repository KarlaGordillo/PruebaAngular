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
  cityWeather: CityWeather = new CityWeather("", "", "", "", "", "", [], "");
  dataWeather: CityWeather[] = [];
  img;
  constructor(
    private httpApi: Services
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.WeatherResult != undefined) {
      this.cityWeather = this.WeatherResult;
      for (var i = 0; i < this.cityWeather.WheatherIcon.length; i++) {
        this.cityWeather.WheatherIcon[i].icon = this.httpApi.getIcon(this.cityWeather.WheatherIcon[i].icon);
      }
      this.img = "url('" + this.getBackground(this.cityWeather.WheatherIcon[0].id) + "')";
      this.dataWeather = this.httpApi.getCityWeather(this.cityWeather.CityName);
    }
  }

  getBackground(code: string) {
    let codigo = parseInt(code);
    let backgr = "";
    if(codigo >= 200 && codigo < 300){
      backgr = "../../../assets/imgs/truenos.jpg";
    }
    else if(codigo >= 300 && codigo < 400){
      backgr = "../../../assets/imgs/llovizna.jpg";
    }
    else if(codigo >= 500 && codigo < 600){
      backgr = "../../../assets/imgs/lluvioso.jpg";
    }
    else if(codigo >= 700 && codigo < 800){
      backgr = "../../../assets/imgs/viento.jpg";
    }
    else if(codigo == 800){
      backgr = "../../../assets/imgs/soleado.jpg";
    }
    else if(codigo > 800){
      backgr = "../../../assets/imgs/nublado.jpg";
    }
    return backgr;
  }

}
