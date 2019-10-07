import { Component, OnInit } from '@angular/core';
import { CustomerDetailService } from 'src/app/shared/customer-detail.service';
import { ToastrService } from 'ngx-toastr';
import { CustomerDetail } from 'src/app/shared/customer-detail.model';

@Component({
  selector: 'app-customer-detail-list',
  templateUrl: './customer-detail-list.component.html',
  styles: []
})
export class CustomerDetailListComponent implements OnInit {

  constructor( private service : CustomerDetailService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  populateForm(pd: CustomerDetail) {    /*Bu kısımda bir problem var anlayamadım :) Edit için silip tekrar eklenmesi gerekiyor. */
    this.service.formData = Object.assign({}, pd);    
  }

  onDelete(id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteCustomerDetail(id)
        .subscribe(res => {
          
          this.service.refreshList();
          this.toastr.warning('Deleted successfully', 'Customer Deleted');
        },
          err => {
            
            console.log(err);
          })
    }
  }
  
}
