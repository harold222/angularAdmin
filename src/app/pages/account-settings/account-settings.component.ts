import { Component } from '@angular/core';
import { SettingsService } from '../../shared-services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent {

  constructor(private settings: SettingsService) { }

  setTheme(theme: string, elementHTML): void {
    this.settings.changeTheme(theme, elementHTML);
  }

}
