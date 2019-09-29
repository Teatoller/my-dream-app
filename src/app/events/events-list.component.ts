import { Component } from "@angular/core";

@Component({
  selector: "events-list",
  template: `
    <div>
      <hr />
      <div class="well-hoverwell thumbnail">
        <h1>Upcoming Andela Events</h1>
        <h2>{{ event.name }}</h2>
        <div>Date: {{ event.date }}</div>
        <div>Time: {{ event.time }}</div>
        <div>Price: {{ event.price }}</div>
        <div>
          <div>Location: {{ event.location.address }}</div>
          <span>&nbsp;</span>
          <span>{{ event.location.city }}, {{ event.location.country }}</span>
        </div>
      </div>
    </div>
  `
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
