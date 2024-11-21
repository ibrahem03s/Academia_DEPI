import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'all-courses',
    component: AllCoursesComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'team',
    component: TeamComponent,
  },
  {
    path: 'pricing',
    component: PricingComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
