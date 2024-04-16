import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";
import { ConversionRates } from "../model/currency";

@Injectable({
    providedIn : 'root'
})

export class PostService{
    // postUrl : string = `${environment.baseUrl}`;


    postkey : string = 'https://v6.exchangerate-api.com/v6';
    apikey  = 'ae7635ff739126d52e09b37b';

    constructor(private http:HttpClient){}

    // getAllPosts():Observable<any>{
    //     return this.http.get(this.postUrl)
    //     .pipe(
    //         map((res : any)=>{
    //             let currArr:Array<ConversionRates>=[]
    //             for (const key in res) {
    //                 currArr.push{...res[key]}
    //             }
    //         })
    //     )
    // }

    gteexchangerates(basecurrency:string):Observable<any>{
        let posturl = `${this.postkey}/${this.apikey}/latest/${basecurrency}`;
        return this.http.get(posturl)
    }
    getAllCodes(){
        let posturl = `${this.postkey}/${this.apikey}/latest/AED`;
        return this.http.get(posturl)
        .pipe(
            map((res :any)=>{
                let currArr : Array<any>=[];
                for (const key in res.conversion_rates) {
                    currArr.push(key)
                }
                return currArr
            })
            
        )
    }
}
//