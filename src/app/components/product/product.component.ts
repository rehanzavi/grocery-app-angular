import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  catId: any;
  public subcat: any[] = [];

  constructor(private dataService: DataService, private activatedroute: ActivatedRoute, private router: Router) { 
    this.catId = this.activatedroute.snapshot.paramMap.get('id');
    this.dataService.getSubProducts(this.catId).subscribe((data: any) => {
      this.subcat = data.data
    })
  }
  onSelectProduct(product:any){
    this.router.navigate(['/products/details', product._id])
  }

  ngOnInit(): void {
  }

}
