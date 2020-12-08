import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private elementTheme = document.querySelector('#theme');
  private checkChanged: HTMLElement;

  constructor() { }

  public defaultTheme() {
    const url = localStorage.getItem('theme') || 'assets/css/colors/default-dark.css';

    this.elementTheme.setAttribute('href', url);
    this.saveStorage(url);
  }

  public changeTheme(theme: string, elementHTML): void {
    const url = `assets/css/colors/${theme}.css`;
    this.elementTheme.setAttribute('href', url);

    this.saveStorage(url);
    this.checkTheme(elementHTML);
  }

  private checkTheme(elementHTML): void {
    if(this.checkChanged){
      this.checkChanged.classList.remove('working');
    }
    elementHTML.classList.add('working');
    this.checkChanged = elementHTML;
  }

  private saveStorage(theme: string): void {
    localStorage.setItem('theme', theme);
  }

}
