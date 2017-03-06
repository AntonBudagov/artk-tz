import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);



// import {AppComponent} from './app.component';
// import {HTTP_PROVIDERS} from '@angular/http';
// //Applying the route configuration when bootstrapping Angular2 app
// bootstrap(<any>AppComponent, [HTTP_PROVIDERS])
//     .catch(err => console.error(err));