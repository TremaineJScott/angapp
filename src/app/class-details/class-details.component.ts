import { Component,Input, OnInit } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { IClass } from '../interfaces/IClass';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent implements OnInit {
@Input() index: string = "n/a";

classDetails: any;

//classDetails: IClass | undefined ;

  constructor(private repo : RepositoryService) { }

  ngOnInit(): void {
    this.classDetails = this.repo.getClassDetails(this.index)
  }

}
