import { Component } from '@angular/core';
import { ChuckNorrisServiceService } from './chuck-norris-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bromaAleatoria: any;
  categorias:any;
  busquedaBromas:any;
  textoBusqueda: string = '';
  mostrarTabla: boolean = false;
  mensajeNoResultados: string = '';

  constructor(private chuckNorrisService: ChuckNorrisServiceService, private router: Router) { }

  obtenerNuevaBromaAleatoria() {
    this.chuckNorrisService.obtenerBromaAleatoria().subscribe((data) => {
      this.bromaAleatoria = data;
    });
  }

  obtenerCategorias(){
    this.chuckNorrisService.obtenerCategorias().subscribe((data)=>{
      this.categorias=data;
    });
  }

  buscarBromas(){
    this.chuckNorrisService.buscarBromas(this.textoBusqueda).subscribe((data)=>{
      this.busquedaBromas=data;
      this.mostrarTabla = data.total > 0;
      this.mensajeNoResultados = data.total === 0 ? 'No se encontraron resultados para la busqueda.' : '';
    });
  }

}
