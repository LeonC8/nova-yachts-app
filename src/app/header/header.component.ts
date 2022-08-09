import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  @ViewChild('navbarToggler', {static:true}) navbarToggler: ElementRef = new ElementRef(null);
  @ViewChild('navbarCollapserDiv', {static:true}) navbarCollapserDiv: ElementRef = new ElementRef(null);

  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faEnvelope = faEnvelope;

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.navbarToggler.nativeElement.setAttribute("aria-expanded", false);
      this.navbarToggler.nativeElement.classList.add('collapsed');
      this.navbarCollapserDiv.nativeElement.classList.remove('show')
    })
  }

}
