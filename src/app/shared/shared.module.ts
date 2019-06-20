// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { NgxPaginationModule } from 'ngx-pagination';
// import { NgSelectModule } from '@ng-select/ng-select';
// import { NgxfUploaderModule } from 'ngxf-uploader';
// import { Ng2TelInputModule } from 'ng2-tel-input';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NameShortenerPipe } from './pipes/name-shortener.pipe';

// import { YouTubePipe } from './pipes/Youtube.pipe';
// import { ShortDescription } from './pipes/ShortDescription.pipe';
// import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
// import { MatchCardComponent } from './components/match-card/match-card.component';
// import { SlickModule } from 'ngx-slick';
// import { SubNavHeaderComponent } from './sub-nav-header/sub-nav-header.component';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { CreatePlayerComponent } from './components/create-player/create-player.component';
// import { DateRangePickerComponent } from './components/date-range-picker/date-range-picker.component';
// import { MatchRulePickerComponent } from './pickers/match-rule-picker/match-rule-picker.component';
// import { GroundPickerComponent } from './pickers/ground-picker/ground-picker.component';
// import { TeamPickerComponent } from './pickers/team-picker/team-picker.component';
// import { OfficialPickerComponent } from './pickers/official-picker/official-picker.component';
// import { PlayersPickerComponent } from './pickers/players-picker/players-picker.component';
// import { AgmCoreModule } from '@agm/core';
// import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
// import { NumberSuffix } from './pipes/number-suffix';
// import { PlayerSearchFilterComponent } from './components/search-filters/player-search-filter/player-search-filter.component';
// import { TeamSearchFilterComponent } from './components/search-filters/team-search-filter/team-search-filter.component';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { DataLoadingComponent } from '@app/common/data-loading/data-loading.component';
// import { OfficialSearchFilterComponent } from './components/search-filters/official-search-filter/official-search-filter.component';
// import { ClubSearchFilterComponent } from './components/search-filters/club-search-filter/club-search-filter.component';
// import { SocialshareComponent } from './socialshare/socialshare.component';
// import { GroundsFilterComponent } from './components/search-filters/grounds-filter/grounds-filter.component';
// import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
// import { TestimonialsComponent } from './testimonials/testimonials.component';
// import { PlayerSettingsComponent } from './components/create-player/player-settings/player-settings.component';
// import { PlayerExistComponent } from './components/create-player/player-exist/player-exist.component';


// // Export language
// export function translateHttpLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
// }

// @NgModule({
//   declarations: [
//     FileUploaderComponent,
//     NameShortenerPipe,
//     NumberSuffix,
//     YouTubePipe,
//     ShortDescription,
//     MatchCardComponent,
//     DataLoadingComponent,
//     SubNavHeaderComponent,
//     CreatePlayerComponent,
//     DateRangePickerComponent,
//     MatchRulePickerComponent,
//     GroundPickerComponent,
//     TeamPickerComponent,
//     OfficialPickerComponent,
//     PlayersPickerComponent,
//     GoogleMapsComponent,
//     PlayerSearchFilterComponent,
//     TeamSearchFilterComponent,
//     GroundsFilterComponent,
//     OfficialSearchFilterComponent,
//     ClubSearchFilterComponent,
//     SocialshareComponent,
//     BreadcrumbComponent,
//     TestimonialsComponent,
//     PlayerSettingsComponent,
//     PlayerExistComponent,

//   ],
//   imports: [
//     RouterModule,
//     CommonModule,
//     ReactiveFormsModule,
//     FormsModule,
//     HttpClientModule,
//     NgxPaginationModule,
//     NgSelectModule,
//     NgxfUploaderModule,
//     Ng2TelInputModule,
//     InfiniteScrollModule,
//     NgbModule.forRoot(),
//     SlickModule.forRoot(),
//     AgmCoreModule.forRoot({
//       apiKey: 'AIzaSyAgkU4L0bEiw7cEnn9XSUMUo8xX52r2fgk',
//       libraries: ['places']
//     }),
//     TranslateModule.forRoot({
//       loader: {
//         provide: TranslateLoader,
//         useFactory: translateHttpLoader,
//         deps: [HttpClient]
//       }
//     })
//   ],
//   providers: [],
//   exports: [
//     CommonModule,
//     RouterModule,
//     NgbModule,
//     ReactiveFormsModule,
//     InfiniteScrollModule,
//     FormsModule,
//     NgxPaginationModule,
//     NgSelectModule,
//     NgxfUploaderModule,
//     Ng2TelInputModule,
//     DataLoadingComponent,
//     FileUploaderComponent,
//     NameShortenerPipe,
//     NumberSuffix,
//     YouTubePipe,
//     ShortDescription,
//     DateRangePickerComponent,
//     MatchCardComponent,
//     SlickModule,
//     SubNavHeaderComponent,
//     CreatePlayerComponent,
//     MatchRulePickerComponent,
//     GroundPickerComponent,
//     TeamPickerComponent,
//     OfficialPickerComponent,
//     PlayersPickerComponent,
//     GoogleMapsComponent,
//     PlayerSearchFilterComponent,
//     TeamSearchFilterComponent,
//     GroundsFilterComponent,
//     OfficialSearchFilterComponent,
//     ClubSearchFilterComponent,
//     SocialshareComponent,
//     BreadcrumbComponent,
//     TestimonialsComponent,
//     PlayerExistComponent,
    

//   ]
// })
// export class SharedModule {
//   static forRoot() {
//     return {
//       ngModule: SharedModule,
//       providers: [
//         FileUploaderComponent,
//         DateRangePickerComponent,
//         SubNavHeaderComponent,
//         CreatePlayerComponent,
//         NameShortenerPipe,
//         YouTubePipe,
//         ShortDescription
//       ]
//     };
//   }
// }
