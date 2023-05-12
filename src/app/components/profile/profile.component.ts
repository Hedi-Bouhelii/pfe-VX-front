import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private api:ApiService, private storage:StorageService) { }
  isUpdated=false;
  role:any
  agence:any
  tel:any
  user:any
  form:any ={
    firstname:null,
    lastname:null,
    cin:null,
    email: null,
    tel:null,
    password: null,
    agence:null,
    address:null
  }
  onSubmit(){
    
  }
  ngOnInit() {
    this.role =this.storage.getRole();
    if (this.role ==='ASSURE'){
    this.user = this.storage.getUser();
  }else if (this.role ==='AGENCE'){
    this.agence =this.storage.getAgence();
  }

    console.log(this.user);
   
  
    
  }
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
