import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accont-search',
  templateUrl: './accont-search.component.html',
  styleUrls: ['./accont-search.component.css']
})
export class AccontSearchComponent implements OnInit {

  username: string;
  user: string[];
  repos: string[];
  constructor() { }

  ngOnInit() {
  }

}
