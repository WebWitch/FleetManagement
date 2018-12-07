// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  environment: 'dev',
  url: 'http://localhost:8080',
  keys: {
    agm: 'AIzaSyAg8rOLrM2S_AZljmBoOtfAGLK8UTRpY0c'
  },
  firebase: {
    apiKey: 'AIzaSyBwTrUeeD0BlGs0rQXaxhuhr3VZwtHeZGA',
    authDomain: 'se339-fleet-management.firebaseapp.com',
    databaseURL: 'https://se339-fleet-management.firebaseio.com',
    projectId: 'se339-fleet-management',
    storageBucket: 'se339-fleet-management.appspot.com',
    messagingSenderId: '1025479934830'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
