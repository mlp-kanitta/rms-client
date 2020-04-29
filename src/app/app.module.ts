import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCountryByNameComponent } from './search-country-by-name/search-country-by-name.component';
import { ViewDetailCountryComponent } from './view-detail-country/view-detail-country.component';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchCountryByNameComponent,
    ViewDetailCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  FormsModule,
    HttpClientModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
