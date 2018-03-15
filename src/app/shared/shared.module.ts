import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TestComponent } from './test/test.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule,
    FormsModule,
  ],
  declarations: [
    TestComponent,
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    RouterModule,
    FormsModule,
    TestComponent,
    NavbarComponent,
    FooterComponent,
    TranslateModule,
  ],
})
export class SharedModule { }
