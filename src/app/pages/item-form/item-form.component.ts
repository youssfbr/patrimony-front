import { Component, OnInit } from '@angular/core';
import { JsonPipe, NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Item } from '../../types/Item';
import { ItemService } from '../../services/item.service';
import { FormGroup, FormControlName, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.css',
  imports: [CommonModule, NgFor, ReactiveFormsModule, JsonPipe]
})
export class ItemFormComponent implements OnInit {
  form: FormGroup = this.fb.group({
    id: [{ value: '', disabled: true }],
    barcodeLabel: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    acquisitionDate: ['']    
  });

  items: Item[] = [];
  
  constructor(
    private fb: FormBuilder,
    private service: ItemService
  ) {}    

  ngOnInit(): void {
    this.getAllItems();   
  }

  getAllItems() {
    this.service.getAllItems()
    .subscribe(items => { this.items = items; });
   } 

   onSubmit() {
    // TODO: Use EventEmitter with form value
   // console.warn(this.form.value);
    this.service.createItem(this.form.value)
    .subscribe(() => {      
      this.getAllItems(); 
    });
  }

}
