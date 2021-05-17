import { Component, OnInit } from '@angular/core';
import { categories } from '../data.categories';
import { GridDataResult , PageChangeEvent} from '@progress/kendo-angular-grid';
import {SortDescriptor} from '@progress/kendo-data-query';
import {PDFModule ,ExcelModule} from '@progress/kendo-angular-grid';
import { products } from '../data.products';
import { AppserviceService } from '../servece/appservice.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-kendoapp',
  templateUrl: './kendoapp.component.html',
  styleUrls: ['./kendoapp.component.css']
})
export class KendoappComponent implements OnInit {

  constructor( private service:AppserviceService , public router:Router) { }

  imagepath = "http://appointment.com/upload/";

  ngOnInit(): void {
    console.log('hello');
    // console.log(this.griddata);
    this.getdata();
  }
  public dropDownItems = categories;
  public defaultItem = { text: "Filter by Category", value: null };
  
  public griddata : any[] = products;
  group  = [{field:'ProductName'}]; // this is for group of colume by default using [group]="group" directive  .

  public data:any;
 public finalobj:any;
 
  getdata(){
    this.service.getdata().subscribe((res)=>{
      console.log(res);
      this.data = res;
      this.finalobj = [...this.griddata,...this.data];
      // console.log(this.data[0]);
      // console.log(this.finalobj);
      // let finalObjj = this.data.concat(this.griddata);
      // console.log(finalObjj);

      // console.log(this.finalobj[1][0].id);

    })
  }
  


deleteall(id:any){
  if(confirm("are you sure ?")){
    this.service.deletedata(id).subscribe((res)=>{
      console.log("this is responce");
      console.log(res);
      this.getdata();
  }
  ,(error)=>{
    console.log("this is error");
    console.log(error);
    console.log(error.status);

  }
  )
  }
}

Edit(item:any){
  this.router.navigate(['register'],{
    queryParams:{
      token:JSON.stringify(item)
    }
  })
console.log(item);
}


}
