import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { FormsModule }   from '@angular/forms';

// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { DisplayComponent } from './Components/display/display.component';
import { SelectCityComponent } from './Components/select-city/select-city.component';
import { HistoricComponent } from './Components/historic/historic.component';



@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    SelectCityComponent,
    HistoricComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
