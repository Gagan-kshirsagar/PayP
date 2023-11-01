import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreAboutPlaceComponent } from './more-about-place/more-about-place.component';
import { PlanFormComponent } from './plan-form/plan-form.component';
import { SignupComponent } from './signup/signup.component';
import { SpecificPlaceComponent } from './specific-place/specific-place.component';

const routes: Routes = [

  { path : '', component : SignupComponent, pathMatch : 'full' },

  { path : 'planForm', component : PlanFormComponent },

  { path : 'specificPlace', component : SpecificPlaceComponent },

  { path : 'moreAboutPlace', component : MoreAboutPlaceComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
