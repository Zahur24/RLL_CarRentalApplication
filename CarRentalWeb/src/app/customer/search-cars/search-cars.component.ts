import { Component } from '@angular/core';
import { CustomerServiceService } from '../customer-service/customer-service.service';

@Component({
  selector: 'app-search-cars',
  templateUrl: './search-cars.component.html',
  styleUrls: ['./search-cars.component.scss']
})
export class SearchCarsComponent {

  allCars:any

  searchTerm: string = '';

  
  constructor(private customerServiceService: CustomerServiceService){}

  ngOnInit(): void {
    
  }

  searchCarsByModel(){
    if(this.searchTerm != null || this.searchTerm != ''){
      this.customerServiceService.searchCarsByModel(this.searchTerm).subscribe(res=>{
        this.allCars = res;
        console.log(this.allCars)
      })
    }
   
  }
}
