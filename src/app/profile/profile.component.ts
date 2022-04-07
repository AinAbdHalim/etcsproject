import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


export class profiles {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public phone: string,
    public department: string,
    public address: string
  ) {
  }
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
 // addEditProfileForm : FormGroup;

  today: number = Date.now();

  //profiles = profile[];
  
  loading = false;
  avatarUrl?: string;

  closeResult = '';
  
  isVisible = false;
  isOkLoading = false;
  profile: any;
  
 

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  //
  constructor(private fb: FormBuilder,
    private user:UsersService,
    private router: ActivatedRoute) { }
    form = this.fb.group({
      id: [],
      fullName: [],
      email: [],
      phoneNum: [],
      department: [],
      address: [],
    })

    

    clockIn(): void {
      this.isVisible = true;
    }
  

    
  //constructor(private modalService: NgbModal)
  
  // open(content: any) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

  // updateUser=new FormGroup(
  //   fullname: new FormControl(''),
  //   email: new FormControl(''),
  //   phone: new FormControl(''),
  //   department: new FormControl(''),
  //   address: new FormControl ('')
  // )
  
  userData:any=[];

  ngOnInit(): void {
   this.user.getAllUsers().subscribe((allData)=>{
     console.log(allData);
     this.userData=allData;
       })

    //console.log(this.router.snapshot.params.id);

    
  }

  

}
