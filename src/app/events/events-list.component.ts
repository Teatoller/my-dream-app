import { Component } from "@angular/core";

@Component({
  selector: "events-list",
  template: `
    <div>
      <h1>Upcoming Andela Events</h1>
      <hr />
      <event-thumbnail [event]="event1"></event-thumbnail>
    </div>
  `
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: "Alc Phase-I meet-up",
    date: "7/21/2019",
    time: "9.00 am",
    price: 0.0,
    imageUrl: "/assets/images/andela_logo.png",
    location: {
      address: "1123",
      city: "Nairobi",
      country: "Kenya"
    }
  };
}
