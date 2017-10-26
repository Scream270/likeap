import { Component, OnInit, Input } from '@angular/core';



interface Person {
  name: string;
  picture: string;
}

const PERSONS: Person [] = [
  { name: 'lui', picture: 'https://static.booska-p.com/images/albums/kamelancien-le-charme-en-personne-reedition.jpg' },
  { name: 'elle', picture: 'https://static.booska-p.com/images/albums/kamelancien-le-charme-en-personne-reedition.jpg' },
  { name: 'nous', picture: 'https://static.booska-p.com/images/albums/kamelancien-le-charme-en-personne-reedition.jpg' },
  { name: 'vous', picture: 'https://static.booska-p.com/images/albums/kamelancien-le-charme-en-personne-reedition.jpg' },

];


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  persons: Person[];
  @Input() filterName: string;
  constructor() { }

  ngOnInit() {
    this.persons = PERSONS;
  }
}
