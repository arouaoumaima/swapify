import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/Services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  LoginForm: any
  info = []
  role = localStorage.getItem('role');

  constructor(fb : FormBuilder,
     private authService:AuthService,
     public toastCtrl: ToastController,
     public loadingCtrl: LoadingController,
     private router: Router,
 )
      {
        this.LoginForm = fb.group(
          {
            email: ['', Validators.required],
            password: ['', Validators.required],
    
    
          }
        )

       }
       LoginUser(){
        let data = this.LoginForm.value

        let user = {
          email : data.username,
          password : data.password
        }
        this.authService.loginUser(data).subscribe(

          (res)=> {
            console.log(res)
            localStorage.setItem('role', res.result[0].role);
            localStorage.setItem('name', res.result[0].name);
            localStorage.setItem('id', res.result[0]._id);
            localStorage.setItem('token', res['token']);
            this.role = localStorage.getItem('role');
         
            if (res.result[0].role == 'user') {
              console.log('user');
              this.openToast("succ" ,"Bienvenue" , true ) ;
              
            }
            let helper = new JwtHelperService
            let decodedToken = helper.decodeToken(res.mytoken)
          }, (err)=> {
            console.log(err)
            this.openToast("error" , err.message , false) ;
          } 
        )
       }

  ngOnInit() {
  }
  async openToast(msg : string , titre : string  , succ : boolean) { 
    const loader = await this.loadingCtrl.create({
      duration: 1000
    });

    loader.present();
    loader.onWillDismiss().then(async l => { 
    const toast = await this.toastCtrl.create({  
      message: titre,  
      animated: true,
      position: 'top',  
      duration: 2000,
      cssClass:msg,
      /* buttons: [
        {
          side: 'start',
          icon: 'close-circle',}

        ] */
    });  
    toast.present();  
    if(succ) this.router.navigate(['/myoffers']);
    toast.onDidDismiss().then((val) => {  
      console.log('Toast Dismissed');  
    });  })
  }  
}