import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor( private http:HttpClient) { }
baseurl = "http://appointment.com/api/user/formdata";
create = "http://appointment.com/api/user/insert";
update = "http://appointment.com/api/user/update";


deleted = "http://appointment.com/api/user/delete/";


getdata(){
  return this.http.get(this.baseurl);
}
deletedata(id:number){
  return this.http.get(this.deleted+id);
}

insertdata(form:any,heder:any){
 return this.http.post(this.create,form);
}

updatedata(form:any){
  return this.http.post(this.update,form);
 }

}
