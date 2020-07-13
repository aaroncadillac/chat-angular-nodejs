import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-toggle-theme-icon',
  templateUrl: './toggle-theme-icon.component.html',
  styleUrls: ['./toggle-theme-icon.component.scss']
})
export class ToggleThemeIconComponent {

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme.emit('toggle');
  }

}
