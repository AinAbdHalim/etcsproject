import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder} from '@angular/forms'



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loading = false;
  avatarUrl?: string;

  closeResult = '';
  
  isVisible = false;
  isOkLoading = false;
 

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
  constructor(private fb: FormBuilder) { }
    form = this.fb.group({
      fullName: [],
      email: [],
      phoneNum: [],
      department: [],
      address: [],
    })

    clockIn(): void {
      this.isVisible = true;
    }
  
    handleSave(): void {
      console.log('Button ok clicked!');
      this.isVisible = false;
    }
  
    handleCancell(): void {
      console.log('Button cancel clicked!');
      this.isVisible = false;
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

  
  

  ngOnInit(): void {
  }

}
