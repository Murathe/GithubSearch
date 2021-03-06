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
    return this.http.get("http://api.github.com/users/" + this.username + "?access_token=f2be356f299b53e4094bcbf06e66c17837159ac7").pipe((res => res));
  }
  findRepos(): any{
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=f2be356f299b53e4094bcbf06e66c17837159ac7").pipe((res => res));
  }
  replaceUser(username: string){
    this.username = username;
  }


}
