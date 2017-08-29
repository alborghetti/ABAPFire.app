import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,
         FirebaseObjectObservable } from 'angularfire2/database';
import { MdSidenav, MdDialog } from '@angular/material';

class Flight {
  carrid: string;
  connid: string;
  fldate: string;
  planetype: string;
  seatmax: number;
  seatmaxB: number;
  seatmaxF: number;
  seatsocc: number;
  $key?: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MdSidenav;
  title = 'ABAPFire demo';
  flights: FirebaseListObservable<any[]>;
  selectedFlight = new Flight;
  constructor(
    private db: AngularFireDatabase,
    public dialog: MdDialog) { }

  ngOnInit(): void {
    this.flights = this.db.list('/flights');
    this.flights.subscribe(flights => {
      if (flights[0]) {
        this.selectedFlight = flights[0];
      }
    });
  }

  listItemClick(flight) {
    this.selectedFlight = flight;
    console.log(this.selectedFlight);
  }

  openDialog() {
    this.dialog.open(DialogBookComponent);
  }
}


@Component({
  selector: 'app-dialog-book',
  template: `<h2 md-dialog-title>I am just a demo...</h2>`,
})
export class DialogBookComponent {}
