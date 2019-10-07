import { Injectable } from '@angular/core';
import { CustomerDetail } from './customer-detail.model';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {
  
  formData:CustomerDetail;
  readonly rootURL='http://localhost:49470/api';  /*BaseURL bendeki localhost:port, Değiştirmeyi unutmayın.!*/
  list: CustomerDetail[] ;
  
  constructor(private http:HttpClient) { }

  postCustomerDetail(){
    return this.http.post(this.rootURL+'/CustomerDetails', this.formData);
  }
  putCustomerDetail() {
    return this.http.put(this.rootURL + '/CustomerDetails/'+ this.formData.id, this.formData);
  }
  deleteCustomerDetail(id) {
    return this.http.delete(this.rootURL + '/CustomerDetails/'+ id);
  }

  refreshList(){
    this.http.get(this.rootURL+'/CustomerDetails').toPromise().then(res=> this.list = res as CustomerDetail[]);
  }
}
