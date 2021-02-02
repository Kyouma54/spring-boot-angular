import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'front-end';
  
  sidebarActive: boolean;

  onMenuButtonClick(event: Event) {
      this.sidebarActive = !this.sidebarActive;

      event.preventDefault();
  }
}
