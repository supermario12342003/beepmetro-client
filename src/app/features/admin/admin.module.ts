import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';

import { SidebarModule } from 'ng-sidebar';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule,
    SidebarModule,
  ],
  declarations: [DashboardComponent]
})
export class AdminModule { }
