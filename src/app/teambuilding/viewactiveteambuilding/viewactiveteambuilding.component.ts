import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HubConnection,HubConnectionBuilder } from '@aspnet/signalr';
import { Thing } from 'src/app/models/things';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-viewactiveteambuilding',
  templateUrl: './viewactiveteambuilding.component.html',
  styleUrls: ['./viewactiveteambuilding.component.css']
})
export class ViewactiveteambuildingComponent implements OnInit {
  
  model: Thing;
  public things: Thing[];
  private routeSub: Subscription;
  id: string;
  userId: string;
  private  _hubConnection: HubConnection;
  nick = '';
  message = '';
  messages: string[] = [];

  constructor(public authService: AuthService, private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params): void => {
      this.id = params['id'];
    });

    this.http.get<Thing[]>('https://localhost:5001/things/getThings/' + this.id)
      .subscribe((result) => this.things = result),
      err => console.log(err);

    this.nick = window.prompt('Your name:', this.nick);
  
    this._hubConnection = new HubConnectionBuilder().withUrl("https://localhost:5001/chat").build();
  
    this._hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));
    
    this._hubConnection.on('ReceiveMessage', (nick: string, receivedMessage: string) => {
        const text = `${nick}: ${receivedMessage}`;
        this.messages.push(text);
      });
  }

  public sendMessage(): void {
    this._hubConnection
      .invoke('SendMessage', this.nick, this.message)
      .then(() => this.message = '')
      .catch(err => console.error(err));
  }
}
