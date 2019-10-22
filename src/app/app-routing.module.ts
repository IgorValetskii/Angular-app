import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {InputComponent} from './input/input.component';

const routes: Routes = [
  {path: '', component: HeroesComponent},
  {path: 'demo', component: InputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
