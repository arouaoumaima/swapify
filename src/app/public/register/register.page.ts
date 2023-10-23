import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  dateExample : String = new Date().toISOString();
  date : String = new Date().toISOString().split('T')[0];

  listUser: any = [];
  addUser: any;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private router : Router
    
    ) {

    this.addUser = fb.group(
      {
        name: ['', Validators.required],
        birth_day: [''],
        password: ['', Validators.required],
        email: ['', Validators.required],
        address: [''],
        phone : [''],
        zip : [''],
        city : ['']
      }

    )

  }

  ngOnInit() {
  }

  onSubmit (){
    this.addUser.get('birth_day')?.setValue(this.date.split('T')[0])
    let data = this.addUser.value
    let user = {
      name : data.name,
      birth_day : data.birth_day,
      password : data.password,
      email:data.email,
      address:data.address,
      phone:data.phone,
      zip:data.zip,
      city:data.city
    }
    this.authService.adduser(data).subscribe(
      (res)=>{
        this.openToast("succ" ,"Compte crée avec succès" ) ;
        this.router.navigate(['/login']);
        console.log(data)


      },
      (err)=>{
        this.openToast("error" , err.error.error) ;
      }
    )
  }



  async openToast(msg : string , titre : string ) {  
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
    const toast = await this.toastCtrl.create({  
      message: titre,  
      animated: true,
      position: 'top',  
      duration: 2000,
      cssClass:msg,
    });  
    toast.present();  
    toast.onDidDismiss().then((val) => {  
      console.log('Toast Dismissed');  
    });  
  });
  }  


}
