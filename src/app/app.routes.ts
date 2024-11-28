import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // Composant Login
import { RegisterComponent } from './register/register.component';  // Composant Register
import { LoginComponent } from './login/login.component';  // Composant Login
import { ShipsWikiComponent } from './ships-wiki/ships-wiki.component';  // Composant Login
import { TradingShipComponent } from './wiki/category/trading-ship/trading-ship.component';
import { RaceShipComponent } from './wiki/category/race-ship/race-ship.component';
import { MilitaryShipComponent } from './wiki/category/military-ship/military-ship.component';
import { IndustrialShipComponent } from './wiki/category/industrial-ship/industrial-ship.component';
import { ExplorationShipComponent } from './wiki/category/exploration-ship/exploration-ship.component';
import { BuildingShipComponent } from './wiki/category/building-ship/building-ship.component';
import { IronCladeComponent } from './wiki/vaisseaux/iron-clade/iron-clade.component';

export const routes: Routes = [
  
  { path: 'register', component: RegisterComponent },  // Composant Register
  { path: 'login', component: LoginComponent },  
  { path: 'home', component: HomeComponent },
  { path: 'wikiShips', component: ShipsWikiComponent }, 
  { path: 'vaisseaux_transports', component: TradingShipComponent},
  { path: 'vaisseaux_courses', component: RaceShipComponent},
  { path: 'vaisseaux_militaires', component: MilitaryShipComponent},
  { path: 'vaisseaux_industriels', component: IndustrialShipComponent},
  { path: 'vaisseaux_explorations', component: ExplorationShipComponent},
  { path: 'vaisseaux_constructions', component: BuildingShipComponent},
  { path: 'Ironclade', component: IronCladeComponent},
  
];
