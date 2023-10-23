import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonContent , IonicSlides} from '@ionic/angular';
// import Swiper core and required modules

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.page.html',
  styleUrls: ['./add-offer.page.scss'],
})
export class AddOfferPage implements OnInit {
 
  @ViewChild(IonContent, { static: true }) ionContent: IonContent | undefined;
  @ViewChild(IonicSlides, { static: false }) ionSlides: any;
 

  constructor() { }

  ngOnInit() {
  }

}
