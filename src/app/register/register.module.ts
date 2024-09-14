import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';  // Import du composant


@NgModule({
  declarations: [RegisterComponent],  // Déclarez le composant ici
  imports: [
    CommonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
