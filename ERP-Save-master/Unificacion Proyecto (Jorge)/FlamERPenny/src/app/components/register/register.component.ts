import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({

    email: new FormControl(),
    password: new FormControl()


 });

  constructor(public firebase:AuthService) { }

  ngOnInit() {}


    onSubmit() {
        
      //console.log(this.registerForm.value);
      console.log(this.registerForm.value.email);
      console.log(this.registerForm.value.password);



      this.firebase.Create(this.registerForm.value.email.toString(), this.registerForm.value.password.toString());

      
        
    }

}
