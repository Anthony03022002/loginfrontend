import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
import {TasksComponent} from './components/tasks/tasks.component'
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { SignupComponent } from "./components/signup/signup.component";
import { SigninComponent } from "./components/signin/signin.component";
import { AuthGuard } from "./auth.guard";
const routes: Routes = [
  {
    path: ' ',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'tasks-private',
    component: PrivateTasksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: SigninComponent
  },
  {
    path: 'registrarse',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
