import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { coreReducer } from './reducers/core.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ coreReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  declarations: []
})
export class CoreModule { }
