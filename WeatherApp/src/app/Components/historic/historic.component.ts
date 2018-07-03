import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { CityWeather } from '../../Models/CityWeather';

@Component({
  selector: 'historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent implements OnInit, OnChanges {
  @Input() weatData: CityWeather[];
  data: CityWeather[];
  constructor() { }

  ngOnInit() {
    if(this.weatData != undefined){
      this.data = this.weatData;
      console.log(this.data);
    }
    
    
  }

  ngOnChanges(){
    if(this.weatData != undefined){
      this.data = this.weatData;
      console.log(this.data);
    }
    
  }

}
