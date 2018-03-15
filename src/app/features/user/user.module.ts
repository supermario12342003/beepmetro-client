import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRoutingModule } from './user-routing.module';
import { SidebarModule }      from 'ng-sidebar';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule,
    SidebarModule,
    TranslateModule,
  ],
  declarations: [DashboardComponent, LoginComponent, RegisterComponent],
})
export class UserModule {
}
