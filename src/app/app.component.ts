import { Component, OnInit } from '@angular/core';
import { PostService } from './shared/services/postService.service';
import { ConversionRates, Currency } from './shared/model/currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'currencytask';

  constructor(private postService : PostService){}
  currArr!:Array<Currency>
  basecurrency! : string;
  targetCurrency! : string;
  amount : number = 1;
  result : number = 0;
  currencyCode! : string[];

  ngOnInit(): void {
    this.postService.getAllCodes()
    .subscribe(res => {
      console.log(res);  
      this.currencyCode = res;
    })
  }

  convertCurrency(){
    this.postService.gteexchangerates(this.basecurrency)
    .subscribe(res => {console.log(res)
    this.result = res.conversion_rates [this.targetCurrency] * this.amount
      console.log(this.result);  
  }
    )
  }

}
