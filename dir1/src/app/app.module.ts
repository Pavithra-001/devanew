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
@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    DirectiveComponent,
    PipeComponent,
    CustomDirective,
    ConsumerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
