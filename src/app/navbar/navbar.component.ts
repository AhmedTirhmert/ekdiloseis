import {ElementRef, HostListener ,HostBinding,ViewChild,Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  @ViewChild('toggleButton') toggleButton!: ElementRef;
  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('buttonmobile') buttonmobile!: ElementRef;
  @ViewChild('searchformobile') searchformobile!: ElementRef;

  closeUpDropdown($event : any){
    this.buttonmobile.nativeElement.parentElement.classList.toggle('dropdown-open')
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

  openSearchformobile($event : any){
    this.searchformobile.nativeElement.parentElement.classList.toggle('dropdown-open')
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }

}
