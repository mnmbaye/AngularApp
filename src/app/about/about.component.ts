import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  /*infos = {
    name:'mbaye',
    email:'mb@gmail.com',
    tel:625445585
  };

  comments = [
    { date:new Date(), message:"A"},
    { date:new Date(), message:"B"},
    { date:new Date(), message:"C"}
  ];
*/

  infos:any;
  comments = [];
  commentaire = {date:null, message:""};

  constructor(private service: AboutService) {
    this.infos = service.getInfos();
    this.comments = service.getAllComments();
  }

  ngOnInit() {
  }

  /*addComments() {
    this.commentaire.date = new Date();
    this.comments.push(this.commentaire);
    this.commentaire = {date:null, message:""};
  }

  addCommentsForm(c) {
    console.log(c);
    c.date = new Date();
    this.comments.push(c);
    this.commentaire = {date:null, message:""};
  */

  ////////////SERVICE////////////////////////

  addCommentsForm(c) {
    this.service.addComment(c);
    //this.commentaire = {date:null, message:""}
    //this.comments=this.service.getAllComments()
  }

}
