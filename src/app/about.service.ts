import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  infos = {
    name:'mbaye',
    email:'mb@gmail.com',
    tel:625445585
  };

  comments = [
    { date:new Date(), message:"A"},
    { date:new Date(), message:"B"},
    { date:new Date(), message:"C"}
  ];

  addComment(c) {
    c.date = new Date()
    this.comments.push(c);
  }

  getAllComments() {
    return this.comments;
  }

  getInfos() {
    return this.infos;
  }

  constructor() { }
}
