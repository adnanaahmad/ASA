// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ai_web_server: 'http://localhost:8080/ai-web',
  ai_entity_search_server: 'http://localhost:8087',
  ai_cmt_server: 'http://localhost:8088',
  ai_report_server: 'http://localhost:8089',
  ai_prevented_loss_server: 'http://localhost:8091',
  ai_claim_tracker_server: 'http://localhost:8092'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
