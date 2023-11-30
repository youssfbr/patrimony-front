import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ItemService } from './app/services/item.service';

bootstrapApplication(AppComponent, {
  
  providers:[
    provideHttpClient(withFetch()),    
    ItemService    
  ]})  
  .catch((err) => console.error(err));
