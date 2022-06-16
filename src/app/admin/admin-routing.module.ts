import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';

import { UserGuard } from '../user.guard';
import { AdminComponent } from './admin.component';
import { BearComponent } from './bear/bear.component';
import { CofeeComponent } from './cofee/cofee.component';
import { RandomusersComponent } from './randomusers/randomusers.component';

const routes: Routes = [{ path: '', component: AdminComponent , canActivate:[UserGuard] },
                        {path:'randomusers', component:RandomusersComponent},
                        {path:'cofee',component:CofeeComponent},
                        {path:'bear', component:BearComponent},
                         {path:'logout' ,component:LoginComponent, canActivate:[UserGuard]},
                          {path:'**', redirectTo:''}];
                                
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
