import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
  user: any;
  http: any;
  result : any;

  constructor(private users: UsersService,
    private router: ActivatedRoute) { }

  // form = this.fb.group({
  //   fullName: [],
  //   email: [],
  //   phoneNum: [],
  //   department: [],
  //   address: [],
  // })

  updateUser=new FormGroup( {
    fullName: new FormControl(''),
    email: new FormControl(''),
    phoneNum: new FormControl(''),
    department: new FormControl(''),
    address: new FormControl ('')
  });

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.users.getUserById(this.router.snapshot.params['id']).subscribe((result)=>{
      console.log(result);
    })
  }


  updateData(){
    // console.log(this.updateUser.value);
    this.users.saveUserData(this.updateUser.value).subscribe((result)=>{
       console.log(result);
    });
   
  } 

  
 

}





