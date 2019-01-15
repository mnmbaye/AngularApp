import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent implements OnInit {

  pagePhotos:any;
  currentPage:number=1;
  size:number=10;
  pages:Array<number>=[];
  totalPages:number;
  motCle:string="";

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSearch(dataForm) {
    console.log(dataForm);
    this.http.get("https://pixabay.com/api/?key=10169135-e7665b3aab4773991b4769a2d&q=" + dataForm.motCle+"&per_page="+this.size+"&page="+this.currentPage)
    .subscribe(data=> {
        this.pagePhotos = data;
        this.totalPages = this.pagePhotos.totalHits/this.size;
        if(this.pagePhotos.totalHits % this.size!=0) ++this.totalPages;
        this.pages = new Array(this.totalPages);
    })
  }

  gotToPage(index) {
    this.currentPage=index+1;
    this.onSearch({motCle:this.motCle});
  }

}
