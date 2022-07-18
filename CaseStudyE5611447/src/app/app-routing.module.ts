import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routerConfig: Routes = [
  {
      path: 'home',
      component: HomeComponent,
      canActivate: [AuthGuardGuard]
  },
  {
      path: 'employees',
      component: EmployeesComponent,
      canActivate: [AuthGuardGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
