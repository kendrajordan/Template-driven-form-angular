import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

const materialComponents = [MatButtonModule,MatFormFieldModule,MatInputModule,MatCardModule,MatSelectModule,MatRadioModule,MatCheckboxModule];
@NgModule ({
  imports: [materialComponents],
  exports:[materialComponents],
  providers: [],
})
export class MaterialModule {}