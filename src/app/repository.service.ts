import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClass } from './interfaces/IClass';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  classList: IClass[] = [
    {index:"barbarian",name:"Barbarian",healthPoints: 50,mainWeapon: "war hammer"},
    {index:"bard",name:"Bard",healthPoints: 30,mainWeapon: "lute"},
    {index:"fighter",name:"Fighter",healthPoints: 60,mainWeapon: "sword"}
  ]
  


  private apiUri:string = "https://www.dnd5eapi.co/api/classes";

  constructor(private http: HttpClient) { }

  getCharacterClasses(){
    return this.http.get(this.apiUri);
  }

  getClassDetails(index:string){
    return this.http.get(`{this.apiUri}/{index}`)
    //return this.classList.find( c => c.index === index);
  }
}
