import { Component, OnInit } from '@angular/core';
import { CompraService } from '../../services/compra.service';
import { Compra } from '../../../Compra';
import { CommonModule } from '@angular/common';
import { CompraItemComponent } from '../compra-item/compra-item.component';
import { AdicionarItemComponent } from '../adicionar-item/adicionar-item.component';

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [CommonModule, CompraItemComponent,AdicionarItemComponent],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent implements OnInit {

  compras: Compra[] = [];

  constructor(private compraService:CompraService){}

  ngOnInit(): void{

    this.compraService.getCompras().subscribe((dado) => {
      this.compras = dado;
      console.log(dado)
    });
  }

  AddItem(compras:Compra){
    this.compraService.AddItem(compras).subscribe((compras) =>{
      this.compras.push(compras);
    });
  }

  deleteItem(compras:Compra){
    this.compraService.deleteItem(compras).subscribe(() => (this.compras = this.compras.filter((c) => c.id !== compras.id)));
  }

  toggleConcluido(compras:Compra){
    compras.concluido = !compras.concluido;
    this.compraService.updateConcluido(compras).subscribe();
  }
}
