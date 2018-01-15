import { Component, OnInit, ViewEncapsulation, ViewChild }  from '@angular/core';
import { AngularFireDatabase }                              from 'angularfire2/database';
import { MatSidenav, MatDialog }                            from '@angular/material';
import { Observable }                                       from 'rxjs/Observable';

class Flight {
  carrid: string;
  connid: string;
  fldate: Date;
  planetype: string;
  deptime: string;
  cityfrom: string;
  airpfrom: string;
  cityto: string;
  airpto: string;
  $key?: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'ABAPFire demo';
  flights: Observable<any[]>;
  selectedFlight = new Flight;
  constructor(
    private db: AngularFireDatabase,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.flights = this.db.list('/flights').valueChanges();
    this.flights.subscribe(flights => {
      if (flights[0]) {
        this.selectedFlight = <any> flights[0];
      }
    });
  }

  listItemClick(flight) {
    this.selectedFlight = flight;
    console.log(this.selectedFlight);
    this.sidenav.toggle();
  }

  openDialog() {
    this.dialog.open(DialogBookComponent);
  }
}


@Component({
  selector: 'app-dialog-book',
  template: `<h2 matDialogTitle>I am just a demo...</h2>`,
})
export class DialogBookComponent {}
