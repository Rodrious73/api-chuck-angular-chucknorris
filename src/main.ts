/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import axios from 'axios';
axios.defaults.headers.common['User-Agent'] = 'rodrious';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
