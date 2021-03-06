import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../_services/auth.service";
import {AlertifyService} from "../_services/alertify.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @Input() valuesFromHome:any;
  @Output() cancelRegister = new EventEmitter();
  model:any = {};
  constructor(private authService: AuthService,private alertify:AlertifyService) { }

  ngOnInit(): void {
  }

  register(){
    this.authService.register(this.model).subscribe(()=>{
      this.alertify.success('registration successful');
      //console.log('registration successful')
    },error => {
      this.alertify.error(error);
      //console.log(error)
    })
    //console.log(this.model);
  }

  cancel(){
    this.cancelRegister.emit(false);
    console.log('Canceled')
  }
}
