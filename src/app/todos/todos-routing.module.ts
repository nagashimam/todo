import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos.component';
import { TodosModule } from './todos.module';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), TodosModule],
})
export class TodosRoutingModule {}
