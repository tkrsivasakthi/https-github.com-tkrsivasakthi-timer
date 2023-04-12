import { HttpErrorResponse } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  newform: any;
  data: any;
  constructor(private apicall: ApiService) {}

  ngOnInit() {}
  register(newform) {
    console.log(newform.value);

    // method 1 to fetch the data
    /* this.apicall.createapi(newform).subscribe(data =>
 {
   this.data =data;
   
   console.log(this.data);
   if(this.data){
alert("created at"+this.data.createdAt);
   }
   });
 */

    // method 2 to fetch the data
    this.apicall.createapi(newform).subscribe({
      next: (res) => {
        this.data = res;
        console.log(this.data);
        alert(this.data);
      },
      error: (err: HttpErrorResponse) => {
        if (err.status) {
          console.log('An error occurred');
        }
      },
    });
  }
}
