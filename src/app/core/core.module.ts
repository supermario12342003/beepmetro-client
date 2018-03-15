import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { WebsocketService, UserService } from './services';

@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
  ],
  declarations: [],
  exports: [
    BrowserModule,
  ],
  providers: [
    //all service here
    UserService,
    WebsocketService
  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
