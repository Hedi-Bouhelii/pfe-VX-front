import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


  ngOnInit(): void {
  }
  constructor(private api:ApiService) { }
  form:any={
    newPassword:null,
    Currentpassword:null
  }
  onSubmit(){
    const {Currentpassword,newPassword}=this.form
    console.log(Currentpassword + newPassword)
    this.api.changePassword(Currentpassword,newPassword).subscribe(data => {
      console.log(data)
    })
  }

}
