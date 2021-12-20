import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Summoner } from '../models/summoner';
import { SummonerService } from '../services/summoner.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  summonerFormControl: FormControl = new FormControl('AlphaFrog');

  summonerObject!: Summoner;

  showSpinner = false;

  constructor(private summonerService: SummonerService) {}

  ngOnInit(): void {}

  onGetSummoner() {
    this.showSpinner = true;
    this.summonerService
      .getSummoner(this.summonerFormControl.value)
      .subscribe((summonerObj: Summoner) => {
        this.summonerObject = summonerObj;
        this.summonerObject.profileImageURL =
          this.summonerService.getSummonerProfileIcon(
            summonerObj.profileIconId
          );
        this.showSpinner = false;
      });
  }
}
