import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ItemFormComponent } from "./pages/item-form/item-form.component";
import { HttpClientModule } from '@angular/common/http';
import { ItemService } from './services/item.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      CommonModule, 
      RouterOutlet, 
      NavbarComponent, 
      ItemFormComponent,
      ReactiveFormsModule,
      HttpClientModule],
      providers: [ItemService]
})
export class AppComponent {
  title = 'patrimony-ui';
}
