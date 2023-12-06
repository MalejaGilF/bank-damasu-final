import { Route } from '@angular/router';
import { CalculateFormComponent } from './components/forms/calculate-form/calculate-form.component';
import { PersonalInfoComponent } from './components/forms/personal-info/personal-info.component';
import { HomeComponent } from './components/layout/home/home.component';
import { MainCdtComponent } from './components/layout/main-cdt/main-cdt.component';

export const appRoutes: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'CDT', component: MainCdtComponent },
  { path: 'CDT/personal-info', component: PersonalInfoComponent },
  { path: 'CDT/personal-info/calulate', component: CalculateFormComponent },
];
