import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(private api:ApiService) { }
  // form:any={
  //   newPassword:null,
  //   Currentpassword:null
  // }
  // ngOnInit(): void {
  // }
  // onSubmit(){
  //   const {Currentpassword,newPassword}=this.form
  //   console.log(Currentpassword + newPassword)
  //   this.api.changePassword(Currentpassword,newPassword).subscribe(data => {
  //     console.log(data)
  //   })
  // }
}
