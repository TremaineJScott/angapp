import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
@Input() name = "Unknown"
@Input() type = "peasant"

weapons: string[] = ["stick"]; 

goldAmount: number = 100;
healthPercent: number = .75;

  constructor() { }

  ngOnInit(): void {
    if(this.type==="bard")
    {
      this.weapons = ["lute","wine"];
    }else if (this.type==="fighter"){
      this.weapons = ["Dagger","BOW","Quiver of Arrows"]
    }
  }

}
