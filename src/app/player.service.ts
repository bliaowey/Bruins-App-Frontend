import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './player';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class PlayerService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getPlayers(): Observable<Player[]> {
        return this.http.get<Player[]>(`${this.apiServerUrl}/players/all`);
    }

    public addPlayer(player: Player): Observable<Player> {
        return this.http.post<Player>(`${this.apiServerUrl}/players/add`, player);
    }

    public updatePlayers(player: Player): Observable<Player> {
        return this.http.put<Player>(`${this.apiServerUrl}/players/update`, player);
    }

    public deletePlayers(playerId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/players/delete/${playerId}`);
    }
}