import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableCrudComponent } from './table-crud/table-crud.component';
import { TableEditComponent } from './table-edit/table-edit.component';
import { TableExportComponent } from './table-export/table-export.component';


const routes: Routes = [
  { path: 'table-crud', component: TableCrudComponent },
  { path: 'table-edit', component: TableEditComponent },
  { path: 'table-export', component: TableExportComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
