import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit { 
  isOpen: boolean = true;
  
  @ViewChild('sidenavMain')
  sidenavMain!: ElementRef;
  @ViewChild('logoImg')
  logoImg!: ElementRef;
  @ViewChild('navItemT')
  navItemT!: ElementRef;
  @ViewChild('drown')
  drown!: ElementRef;
  @ViewChild('asideMain')
  asideMain!: ElementRef;
  @ViewChild('dropdownexample')
  dropdownexample!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }


  toggleSidenav() {

    this.isOpen = !this.isOpen;
    let array = this.navItemT.nativeElement.children;
    let array_dropdown=this.dropdownexample.nativeElement.children;
    
    if (this.isOpen) {
      this.sidenavMain.nativeElement.classList.remove('close-nav-state');
      this.sidenavMain.nativeElement.classList.add('open-nav-state');
      this.asideMain.nativeElement.classList.remove('close-nav-state');
      this.asideMain.nativeElement.classList.add('open-nav-state');
      this.sidenavMain.nativeElement.removeAttribute('style');
      this.asideMain.nativeElement.removeAttribute('style');
      this.logoImg.nativeElement.removeAttribute('style');
      this.drown.nativeElement.removeAttribute('style');
      this.navItemT.nativeElement.removeAttribute('style');
      for (let i = 0; i < array.length; i++) {
        array[i].children[0].children[1].removeAttribute('style'); 
      }
      for (let i = 0; i < array_dropdown.length; i++) {
        array_dropdown[i].children[0].children[1].removeAttribute('style'); 
      }
    } else {
      this.sidenavMain.nativeElement.classList.remove('open-nav-state');
      this.sidenavMain.nativeElement.classList.add('close-nav-state');
      this.asideMain.nativeElement.classList.remove('open-nav-state');
      this.asideMain.nativeElement.classList.add('close-nav-state');
      for (let i = 0; i < array.length; i++) { 
        array[i].children[0].children[1].style.display = 'none';
       
      }
      for (let i = 0; i < array_dropdown.length; i++) { 
        array_dropdown[i].children[0].children[1].style.display = 'none';
       
      }
      this.sidenavMain.nativeElement.style.width = '54px';
      this.asideMain.nativeElement.style.width = '54px';
      this.logoImg.nativeElement.style.display = 'none';
      this.drown.nativeElement.style.display = 'none';
     
    }
  }
}
