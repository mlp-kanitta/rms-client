import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchCountryByNameComponent } from './search-country-by-name/search-country-by-name.component';
import { ViewDetailCountryComponent } from './view-detail-country/view-detail-country.component';

const routes: Routes = [
   { path: '', component: SearchCountryByNameComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
