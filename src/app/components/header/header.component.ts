import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isCollapsed = true;
  isLoggedIn = false;
  private roles: string[] = [];
  showAdminBoard = false;
  showOwnerBoard = false;
  title = 'restaurantReviewPortal';
  username?: string;
  uesrID!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
