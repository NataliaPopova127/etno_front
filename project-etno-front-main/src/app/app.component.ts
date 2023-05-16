import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export  class AppComponent {
  isNavbarCollapsed = true;

  constructor(ngbConfig: NgbConfig, private router: Router) {
    ngbConfig.animation = true;
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
    });
}

  title = 'project-etno-front';  
}
