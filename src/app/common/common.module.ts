import { NgModule } from '@angular/core';
import { CommonComponent } from './common.component';
import { CommonRouting } from './common.routing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  imports: [
    SharedModule,
    CommonRouting,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    CommonComponent
  ]
})
export class CommonComponentModule { }
