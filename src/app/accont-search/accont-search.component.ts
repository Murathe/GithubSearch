import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from '../github-search.service';

@Component({
  selector: 'app-accont-search',
  templateUrl: './accont-search.component.html',
  styleUrls: ['./accont-search.component.css']
})
export class AccontSearchComponent implements OnInit {

  username: string;
  user: string[];
  repos: string[];

  constructor(private githubsearchService: GithubSearchService) { 
    this.githubsearchService.findUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });
    this.githubsearchService.findRepos().subscribe(repo =>{
      console.log(repo);
      this.repos = repo;
    });
  }

  searchUser(){
    this.githubsearchService.replaceUser(this.username);
  }

  ngOnInit() {
  }

}
