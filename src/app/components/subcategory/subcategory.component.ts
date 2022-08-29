import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  subCategory: any[] = [];

  constructor(private dataService: DataService) { 
    this.dataService.getSubCategory(2).subscribe((response: any) => {
      this.subCategory = response.data
    })
  }

  ngOnInit(): void {
  }

}
