import { Component, OnInit } from '@angular/core';
import { BossRepositoryService } from '../boss-repository.service';
import { IBossMonster } from '../interfaces/boss-monster';

@Component({
  selector: 'app-deadliest-boss',
  templateUrl: './deadliest-boss.component.html',
  styleUrls: ['./deadliest-boss.component.css']
})
export class DeadliestBossComponent implements OnInit {

  deadliestBoss: IBossMonster | undefined = undefined

  constructor(private bossRepo: BossRepositoryService) { }

  ngOnInit(): void {
    this.deadliestBoss = this.bossRepo.getBossMonsters().reduce(
      function(pm,cm){return (pm.healthPoints > cm.healthPoints ? pm: cm)}
    )
  }

}
