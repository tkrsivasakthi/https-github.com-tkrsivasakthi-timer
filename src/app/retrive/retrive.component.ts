import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-retrive',
  templateUrl: './retrive.component.html',
  styleUrls: ['./retrive.component.css'],
})
export class RetriveComponent implements OnInit {
  user: any = {};
  id: any;
  res: any = {};
  image: string;
  constructor(private apicall: ApiService) {}

  ngOnInit() {}
  retrive(user) {
    this.id = user.id;
    console.log(this.id);

    //method 1
    /* this.apicall.retriveApi(this.id).subscribe(data=>
{
  this.res=data;
  console.log(this.res);
  console.log(this.res.data.last_name);
  });
 */

    //method 2
    this.apicall.retriveApi(this.id).subscribe({
      next: (success) => {
        this.res = success;
        this.image = this.res.data.avatar;
      },
      error: (err: HttpErrorResponse) => {
        if (err.status === 404) {
          alert('no data found');
        }
      },
    });
  }
}
