import { Component, OnInit } from '@angular/core';
import { CustomerDetailService } from 'src/app/shared/customer-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styles: []
})
export class CustomerDetailComponent implements OnInit {

  constructor(private service:CustomerDetailService,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm)
  {
    if(form!=null){form.form.reset();}
    this.service.formData= {
      id:0,
      Name:'',
      Surname:'',         /*Formun resetlendiği kısım. */
      TaxId:'',
      Phone:'',
      Adress:'',
    }
  }
  onSubmit(form : NgForm){
    if (this.service.formData.id == 0)    /*Eğer öyle bir müsteri yoksa ekle, varsa updateRecordu çağır.*/
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  insertRecord(form: NgForm) {
    this.service.postCustomerDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Customer Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putCustomerDetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Customer Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}
