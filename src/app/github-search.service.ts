import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubSearchService {

  apiUrl = environment.apiUrl;
  private username: string;
  private repo: string;

  constructor(private http: HttpClient) { 
    console.log("ready");
    this.username = "Murathe";
    this.repo = '';
  }
  findUser(): any {
    return this.http.get("http://api.github.com/users/" + this.username + "?access_token=b7e19011dae2fe6736b3454bb6f56637774ae721").pipe((res => res));
  }
  findRepos(): any{
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=b7e19011dae2fe6736b3454bb6f56637774ae721").pipe((res => res));
  }
  


}
