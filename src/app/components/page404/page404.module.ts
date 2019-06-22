import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Page404Component} from "./page404.component";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const page404Routes: Routes = [
  { path: '', component: Page404Component }
];


@NgModule({
  declarations: [
    Page404Component,
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(page404Routes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],

  providers: [],
  exports: []

})

export class Page404Module {

}

