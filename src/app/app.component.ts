import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private isDark = false;
  @HostBinding('class')
  get checkTheme() {
    return this.isDark ? 'dark-theme' : 'light-theme';
  }

  switchMode(isDarkTheme: boolean) {
    this.isDark = isDarkTheme;
  }
}
