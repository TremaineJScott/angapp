import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-character-class-list',
  templateUrl: './character-class-list.component.html',
  styleUrls: ['./character-class-list.component.css']
})
export class CharacterClassListComponent implements OnInit {

  title : string = "Character Classes";
  characterClasses: any;

  constructor(private repo : RepositoryService) { }

  ngOnInit(): void {
    this.repo.getCharacterClasses().subscribe(
      (response) => {this.characterClasses = response;}
    )
  }

}
