import { Component, OnInit } from '@angular/core';
import { BossRepositoryService } from '../boss-repository.service';
import { IBossMonster } from '../interfaces/boss-monster';

@Component({
  selector: 'app-bosslist',
  templateUrl: './bosslist.component.html',
  styleUrls: ['./bosslist.component.css']
})
export class BosslistComponent implements OnInit {
  bossMonsters: IBossMonster[] = [];

  constructor(private bossRepo: BossRepositoryService) { }

  ngOnInit(): void {
    this.bossMonsters = this.bossRepo.getBossMonsters();
  }

}
