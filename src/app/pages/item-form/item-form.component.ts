import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../../types/Item';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.css'
})
export class ItemFormComponent {

  items: Item[] = [
    {id: 1, barcodeLabel: 'AA1234', description: 'Notevb', acquisitionDate: new Date },
    {id: 2, barcodeLabel: 'BB1234', description: 'Novtevb', acquisitionDate: new Date }
  ]

}
