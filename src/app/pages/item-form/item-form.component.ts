import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../../types/Item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.css'
})
export class ItemFormComponent implements OnInit {

  items: Item[] = [];
  
  constructor(private service: ItemService) {}  

  ngOnInit(): void {
    this.getAllItems();   
  }

  getAllItems() {
    this.service.getAllItems().subscribe(items => {
      this.items = items;
     });
   } 

}
