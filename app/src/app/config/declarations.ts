// _neu_generated_code__dont_modify_directly_
import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-landingComponent
import { landingComponent } from '../components/home/landing.component';
//CORE_REFERENCE_IMPORT-add_data_formComponent
import { add_data_formComponent } from '../components/add_data/add_data_form.component';
//CORE_REFERENCE_IMPORT-deye_inventerComponent
import { deye_inventerComponent } from '../components/records/deye_inventer.component';
//CORE_REFERENCE_IMPORT-meter_boxComponent
import { meter_boxComponent } from '../components/records/meter_box.component';
//CORE_REFERENCE_IMPORT-dashboardComponent
import { dashboardComponent } from '../components/dashboard/dashboard.component';
//CORE_REFERENCE_IMPORT-log_inComponent
import { log_inComponent } from '../components/Auth/log_in.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-landingComponent
  landingComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-add_data_formComponent
  add_data_formComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-deye_inventerComponent
  deye_inventerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-meter_boxComponent
  meter_boxComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dashboardComponent
  dashboardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-log_inComponent
  log_inComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'log-in', component: log_inComponent },
  { path: 'dashboard', component: dashboardComponent },
  { path: 'deye_records', component: deye_inventerComponent },
  { path: 'meterbox_records', component: meter_boxComponent },
  { path: 'add_data', component: add_data_formComponent },
  { path: 'landing', component: landingComponent },
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
