import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Compra } from '../../../Compra';
import { CommonModule } from '@angular/common';
import { faTimes} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'app-compra-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './compra-item.component.html',
  styleUrl: './compra-item.component.css'
})
export class CompraItemComponent {
  @Input() compras!: Compra;
  @Output() onDeleteItem = new EventEmitter<Compra>();
  @Output() onToggleconcluido = new EventEmitter<Compra>();

  faTimes = faTimes

  onDelete(item:Compra){
    this.onDeleteItem.emit(this.compras);
  }
  onToggle(item:Compra){
    this.onToggleconcluido.emit(this.compras);
  }
}
