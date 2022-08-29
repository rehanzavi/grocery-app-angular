import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-productdetail-page',
  templateUrl: './productdetail-page.component.html',
  styleUrls: ['./productdetail-page.component.css']
})
export class ProductdetailPageComponent implements OnInit {

  productDetail: any = {};
  pId:any;

  constructor(private dataService: DataService, private activatedroute: ActivatedRoute) {
    this.pId = this.activatedroute.snapshot.paramMap.get('pid');
    this.dataService.getProductDetails(this.pId).subscribe((response: any) => {
      this.productDetail = response.data
    })
   }

  ngOnInit(): void {
  }

}
