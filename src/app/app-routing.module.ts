import { WishListComponent } from './components/wish-list/wish-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome-screen',
    pathMatch: 'full'
  },
  {
    path:'welcome-screen',
    component: WelcomeScreenComponent
  },
  {
    path: 'search-page',
    component: SearchPageComponent
  },
  {
    path: 'wish-list',
    component: WishListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
