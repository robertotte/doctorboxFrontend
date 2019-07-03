import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { HeaderComponent } from './header/header.component';


// Export language
export function translateHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    SubHeaderComponent,
    HeaderComponent,

  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SubHeaderComponent,
    HeaderComponent
  ]
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [
        SubHeaderComponent,
        HeaderComponent

      ]
    };
  }
}
