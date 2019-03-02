// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  SamplePage,
} from './';

export default {
  path: 'pluginnameplaceholder',
  childRoutes: [
    { path: 'sample-page', component: SamplePage },
  ],
};
