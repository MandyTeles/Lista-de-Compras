import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Compra } from '../../../Compra';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adicionar-item',
  standalone: true,
  imports: [FormsModule,ButtonComponent,CommonModule],
  templateUrl: './adicionar-item.component.html',
  styleUrl: './adicionar-item.component.css'
})
export class AdicionarItemComponent {
  @Output() onaddItem = new EventEmitter<Compra>();

  item: string = '';
  categoria: string='';
  concluido: boolean= false;
  mostrarAddItem: boolean= false;

  AlteraVisu(valor: boolean){
    this.mostrarAddItem = valor;
  }

  onSubmit(){
    if (!this.item){
      alert('Adicione um item para a lista')
      return;
    }
    const novoItem = {
      item: this.item,
      categoria: this.categoria,
      concluido: this.concluido
    }

    this.onaddItem.emit(novoItem);
    this.item = '';
    this.categoria='';
    this.concluido= false;
  }
}
