import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-iron-clade',
  standalone: true,
  templateUrl: './iron-clade.component.html',
  styleUrls: ['./iron-clade.component.scss'],
})
export class IronCladeComponent {
  // Références aux onglets
  @ViewChild('specsTab') specsTab!: ElementRef<HTMLDivElement>;
  @ViewChild('armamentTab') armamentTab!: ElementRef<HTMLDivElement>;
  @ViewChild('historyTab') historyTab!: ElementRef<HTMLDivElement>;

  /**
   * Affiche l'onglet sélectionné et cache les autres.
   * @param tabId L'identifiant de l'onglet à afficher (ex: 'specs', 'armament', 'history').
   */
  showTab(tabId: string): void {
    // Récupère tous les onglets
    const tabs = [
      this.specsTab.nativeElement,
      this.armamentTab.nativeElement,
      this.historyTab.nativeElement,
    ];

    // Cache tous les onglets
    tabs.forEach((tab) => tab.classList.add('hidden'));

    // Affiche l'onglet sélectionné
    if (tabId === 'specs') {
      this.specsTab.nativeElement.classList.remove('hidden');
    } else if (tabId === 'armament') {
      this.armamentTab.nativeElement.classList.remove('hidden');
    } else if (tabId === 'history') {
      this.historyTab.nativeElement.classList.remove('hidden');
    }
  }
}

