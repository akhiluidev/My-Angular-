import { Component,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})




export class AboutComponent {

  countries: any;
  selectedCountry: string = '';

  constructor(private http: HttpClient) {


  }


  ngOnInit(): void {

    this.http.get('https://restcountries.com/v2/all?fields=name,callingCodes,flags,alpha2Code').subscribe(success => {
      this.countries = success
      console.log(this.countries)
    }, (error) => {
      console.log(error)
    }
    )

 
  }
  // recieveData(){
  //   let data:any =localStorage.getItem('session')
  //   // alert(data)
  //   this.session = JSON.parse(data)
  // }



  // loadData() {
  //   let data = { id: 1, name: 'akhil' }
  //   localStorage.setItem('session', JSON.stringify(data))
  //   console.log(data)
  // }






}
