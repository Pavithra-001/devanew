import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustomDirective } from './custom.directive';
import { ConsumerPipe } from './consumer.pipe';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentComponent } from './department/department.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoadComponent } from './load/load.component';
import { CrudComponent } from './crud/crud.component';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirectiveComponent,
    PipeComponent,
    CustomDirective,
    ConsumerPipe,
    ReactiveformComponent,
    DepartmentComponent,
    EmployeelistComponent,
    PagenotfoundComponent,
    LoadComponent,
    CrudComponent,
    TaskComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
