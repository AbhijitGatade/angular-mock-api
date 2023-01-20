import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any;

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.api.get("https://63c7d0e05c0760f69abeac84.mockapi.io/api/v1/users").subscribe((result:any)=>{
    this.users = result;
    });
  }
  

  deleteUser(id:any){
    if(confirm("Sure to delete?")){
      this.api.delete("https://63c7d0e05c0760f69abeac84.mockapi.io/api/v1/users/" + id).subscribe((result:any)=>{
        this.load();
      });
    }
  }

}
