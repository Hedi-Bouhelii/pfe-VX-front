import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-addexpert',
  templateUrl: './addexpert.component.html',
  styleUrls: ['./addexpert.component.scss']
})
export class AddexpertComponent implements OnInit {

  constructor(private apiService: ApiService,private storage: StorageService) { }
  form: any = {
    name:null,
    email: null,
    tel:null,
    address: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  ngOnInit(): void {
    console.log(this.storage.getAccessToken())
  }
  onSubmit(): void {
    const {name, email, tel, address } = this.form;
    console.log(this.form)
    this.apiService.addExpert(name, email, tel, address).subscribe({
        next: data => {
         console.log(data)
        },
        error: (err) => {
          console.error(err);
          this.isSignUpFailed = true;
          this.errorMessage = err.error?.message ?? 'Something went wrong';
        }
      }
  )}

}
