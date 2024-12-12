import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import nécessaire pour routerLink

@Component({
  selector: 'app-trading-ship',
  standalone: true,
  imports: [RouterModule], // Ajout de RouterModule ici
  templateUrl: './trading-ship.component.html',
  styleUrls: ['./trading-ship.component.scss']
})
export class TradingShipComponent { }

