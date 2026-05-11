import {
  BootstrapContext,
  bootstrapApplication,
} from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { AppComponent } from './app/app.component';

const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(AppComponent, config, context);

export default bootstrap;
