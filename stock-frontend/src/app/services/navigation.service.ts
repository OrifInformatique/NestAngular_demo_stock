import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private urlHistory: string[] = [];
  private maxHistoryLength: number = 2;

  constructor(private readonly router: Router) { }

  public startSaveHistory() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.urlHistory.push(event.urlAfterRedirects);

        while(this.urlHistory.length > this.maxHistoryLength) {
          this.urlHistory.shift();
        }
      }
    });
  }

  goToPreviousUrl() {
    this.router.navigateByUrl(this.urlHistory[this.urlHistory.length - 2] ?? '/');
  }
}
