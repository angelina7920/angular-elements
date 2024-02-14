import { bootstrapApplication, createApplication } from '@angular/platform-browser';

import { createCustomElement } from '@angular/elements';
import { CountComponent } from './app/ui/count/count.component';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

(async () => {
  const app = await createApplication({
    providers: [],
  });

  const countElement = createCustomElement(CountComponent, {
    injector: app.injector,
  });

  customElements.define('ng-count', countElement);
})();
