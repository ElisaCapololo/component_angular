import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { ParentComponent } from './parent/parent.component';
import { TaskNumberComponent } from './task-number/task-number.component';

const routes: Routes = [
  {path: '', redirectTo: 'new-component', pathMatch: 'full'},
  {path: 'new-component', component: NewComponentComponent},
  {path: 'main-body', component: MainBodyComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'task-number', component: TaskNumberComponent},
  {path: 'parent', component: ParentComponent},
  {path: '***', redirectTo: 'new-component'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
