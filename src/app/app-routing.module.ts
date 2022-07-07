import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEmployComponent } from './component/add-employ/add-employ.component';
import { EditEmployComponent } from './component/edit-employ/edit-employ.component';
import { ListEmployComponent } from './component/list-employ/list-employ.component';

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo: 'add-employ'},
  {path: 'add-employ', component:AddEmployComponent},
  {path: 'list-employ', component:ListEmployComponent},
  {path: 'edit-employ/:id', component:EditEmployComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
