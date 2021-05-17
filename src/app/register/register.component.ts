import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Builder } from 'selenium-webdriver';
import { AppserviceService } from '../servece/appservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  successmeassage:any;  errormeassage :any;  nameerr:any;  emailerr :any;
  passworderr:any;  mobileerr :any;roleerr :any;



  constructor( public fb:FormBuilder,
              public servce:AppserviceService,
              public route :ActivatedRoute
        ) { }

  ngOnInit(): void {

  this.route.queryParams.subscribe((res)=>{
    if(res.token){
      this.edit(JSON.parse(res.token));
    }
  })
  }

    registerdata = this.fb.group({
      id:[''],
      name:[''],
      email:[''],
      password:[''],
      mobile:[''],
      role:[''],
      image:[''],


    })

    public imageformate:any;
    getimage(event:any){
      console.log(event.target.files[0]);
      
      this.imageformate = event.target.files[0]
      
        }

  create(){ 

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    var formdata = new FormData();

    formdata.append('id',this.registerdata.get('id')?.value);
    formdata.append('name',this.registerdata.get('name')?.value);
    formdata.append('email',this.registerdata.get('email')?.value);
    formdata.append('password',this.registerdata.get('password')?.value);
    formdata.append('mobile',this.registerdata.get('mobile')?.value);
    formdata.append('role',this.registerdata.get('role')?.value);
    formdata.append('image',this.imageformate);

    if(this.registerdata.get('id')?.value){
      console.log("update");
       
    this.servce.updatedata(formdata).subscribe((res)=>{
      console.log(res);
      this.successmeassage=res;
      this.errormeassage="";
      this.registerdata.reset();

    },(err)=>{
      console.log("this is error");
      console.log(err);
      console.log(err.error.message);
      console.log(err.error.errors);
      console.log(err.error.errors.email[0]);
      this.errormeassage=err.error.message;
      this.successmeassage="";

    })
    }else{
      
    // this.servce.insertdata(this.registerdata.value,1).subscribe((res)=>{
    //   console.log(res);
    // },(err)=>{
    //   console.log(err);
    // })
    
    this.servce.insertdata(formdata,headers).subscribe((res)=>{
      console.log(res);
      this.successmeassage=res;
      this.errormeassage="";
      this.registerdata.reset();

    },(err)=>{
      console.log("this is error");
      console.log(err);
      console.log(err.error.message);
      console.log(err.error.errors);
      console.log(err.error.errors.email[0]);
      this.errormeassage=err.error.message;
      this.successmeassage="";


    })

    }
  }

  

edit(item:any){
  console.log(item);
  this.registerdata.patchValue(item);
}

}
