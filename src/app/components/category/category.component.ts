import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public category: any[] = [];

  constructor(private dataService: DataService, private router: Router) { 
    this.dataService.getCategory().subscribe((response: any) => {
      this.category = response.data
    })
  }
  onSelectCategory(category:any){
    this.router.navigate(['/products', category.catId])
  }
  ngOnInit(): void {
  }

}
