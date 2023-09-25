import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    isProduction: boolean = environment.production;

    constructor(private readonly navigationService: NavigationService) { 
      this.navigationService.startSaveHistory();
    }
}
