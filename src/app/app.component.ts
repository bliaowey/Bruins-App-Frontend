import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import { PlayerService } from './player.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public players: Player[] = [];
  public title: String = "bruinsapp";

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
      this.getPlayers();
  }

  public getPlayers(): void {
    this.playerService.getPlayers().subscribe(
      (response: Player[]) => {
        this.players = response;
        console.log(this.players);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public endsWith1(string: String): boolean {
    var num = Number(string);
    num = (num - 1) % 10;
    
    if (num == 0) {
      return true;
    } else {
      return false;
    }
  }

public endsWith2(string: String): boolean {
    var num = Number(string);
    num = (num - 2) % 10;
    
    if (num == 0) {
      return true;
    } else {
      return false;
    }
  }

  public endsWith3(string: String): boolean {
    var num = Number(string);
    num = (num - 3) % 10;
    
    if (num == 0) {
      return true;
    } else {
      return false;
    }
  }

  public undrafted(list: String[]): boolean {
    if (list[0] == "0") {
      return true;
    } else {
      return false;
    }
  }
}
