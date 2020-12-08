import { Component } from '@angular/core';
import { SettingsService } from '../shared-services/settings.service';

declare function customInitFunction();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent {

  constructor(private serviceSettings: SettingsService) {
    serviceSettings.defaultTheme();
    customInitFunction();
  }
}
