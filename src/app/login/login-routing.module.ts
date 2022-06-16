import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';

import { UserGuard } from '../user.guard';
import { LoginComponent } from './login.component';

const routes: Routes = [{ path: '', component: LoginComponent },
                           { path:'admin' , component :AdminComponent, canActivate:[UserGuard] }];
                         

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }