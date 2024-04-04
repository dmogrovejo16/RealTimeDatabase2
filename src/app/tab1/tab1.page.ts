import { Component } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
sala:any;
cocina:any;
habitacionBart:any;
habitacionLisa:any;
garaje:any;
entrada:any;
  constructor(private database:Database) {
    const route = ref(this.database, /*direccion a donde ir dentro de la base de datos */);
    object(route).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      console.log(valores_db);
      this.sala=valores_db['sala'];
      this.garaje=valores_db['garaje'];
      this.habitacionBart=valores_db['habitacionBart'];
      this.habitacionLisa=valores_db['habitacionLisa'];
      this.entrada=valores_db['entrada'];
      this.cocina=valores_db['cocina'];
    });
  }

}
