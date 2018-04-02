import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { DrawerPage } from '../shared/drawer/drawer.page';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import * as Email from 'nativescript-email';
import * as Phone from 'nativescript-phone';

@Component({
  selector: 'app-contact',
  moduleId: module.id,
  templateUrl: './contact.component.html'
})
export class ContactComponent extends DrawerPage implements OnInit {
    
    constructor(
        private changeDetectorRef:ChangeDetectorRef,
        private fonticon: TNSFontIconService,
        @Inject('BaseURL') private BaseURL) {
          super(changeDetectorRef);
        }
    
    ngOnInit() {
    }

    callRestaurant () {
      console.log('Calling +852 1234 5678 ...');
      Phone.dial("852-1234-5678",false);
    }

    sendEmail () {
      Email.available()
        .then((avail: boolean) => {
          if (avail) {
            Email.compose({
              to: ['confusion@food.net'],
              subject: '[Confusion]: Query',
              body: 'Dear Sir/Madam:'
            });
          }
          else
            console.log('No Email Configured');
        })
    }
}