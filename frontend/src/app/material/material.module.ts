import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import { MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatIconModule} from '@angular/material/icon'

const materialComponent = [MatButtonModule,MatInputModule,MatButtonToggleModule,MatIconModule]

@NgModule({
  
  imports: [
    materialComponent
  ],
  exports : [
    materialComponent
  ]
})
export class MaterialModule { }
