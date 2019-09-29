import { Component } from "@angular/core";

@Component({
  selector: "events-list",
  templateUrl: './events-list.component.html'
})
export class EventsListComponent {
  event = {
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
