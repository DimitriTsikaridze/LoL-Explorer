import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Summoner } from '../models/summoner';
import { RiotService } from '../services/riot.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  summonerFormControl: FormControl = new FormControl('AlphaFrog');

  summonerObject!: Summoner;

  showSpinner = false;

  constructor(private riotService: RiotService) {}

  ngOnInit(): void {}

  onGetSummoner() {
    this.showSpinner = true;
    this.riotService
      .getSummoner(this.summonerFormControl.value)
      .subscribe((summonerObj: Summoner) => {
        this.summonerObject = summonerObj;
        this.summonerObject.profileImageURL =
          this.riotService.getSummonerProfileIcon(summonerObj.profileIconId);
        this.showSpinner = false;
      });
  }
}
