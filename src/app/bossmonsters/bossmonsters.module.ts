import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BosslistComponent } from './bosslist/bosslist.component';
import { DeadliestBossComponent } from './deadliest-boss/deadliest-boss.component';



@NgModule({
  declarations: [
    BosslistComponent,
    DeadliestBossComponent
  ],
  imports: [
    CommonModule
  ],
  exports:
  [
    BosslistComponent
  ]
})
export class BossmonstersModule { }
