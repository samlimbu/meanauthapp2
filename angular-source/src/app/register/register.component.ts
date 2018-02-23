import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    name: string;
    username: string;
    email: string;
    password: string;
    constructor(
        private validateService: ValidateService,
        private flashMessage: FlashMessagesService,
        private authService: AuthService,
        private router:Router
    ) { }

    ngOnInit() {
    }
    onRegisterSubmit() {
        const user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        }
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: '3000' });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please enter valid email', { cssClass: 'alert-danger', timeout: 3000 });

            return false;
        }

        //Register user , subscribute to observable
        this.authService.registerUser(user).subscribe(data=>{
            if(data.sucess){
                this.flashMessage.show('Sucess! You are now registered and can login', { cssClass: 'alert-success', timeout: 5000 });
                this.router.navigate(['/login']);
            }
            else{
                this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                this.router.navigate(['/login']);
            }
        });

    }
}
