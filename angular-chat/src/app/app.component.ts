import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ThemeService]
})
export class AppComponent implements OnInit{
  title = 'angular-chat';
  darkTheme: boolean = true;

  constructor(private themeService: ThemeService) {}

  ngOnInit(){
    this.themeService.toggleTheme.subscribe(data => {
      this.darkTheme = !this.darkTheme
    });
 }
}
