import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule
  ]
})
export class AppComponent {
  title: string = '1705 David';
  currentIndex: number = 0;

  descriptionItems: string[] = [
    '3 bedrooms',
    '1.75 baths',
    '1000 sqft',
    '1 Car Garage',
    'Backyard fence, shed, patio area',
    'Central Air, Heat',
    'Washer, Dryer hookups',
    'Shaded Front Porch',
    'Stand Up Garden Bed',
  ];

  tabs: any[] = [
    {
      title: 'Living Room'
    },
    {
      title: 'Bedroom'
    },
    {
      title: 'Kitchen'
    }
  ];

  photos = [{
    image: `living-room1.jpg`,
    thumbImage: `living-room1.jpg`,
    title: 'Living Room'
  }, {
    image: `living-room2.jpg`,
    thumbImage: `living-room2.jpg`,
  }, {
    image: `bedroom1.jpg`,
    thumbImage: `bedroom1.jpg`,
    title: 'Bedroom'
  }, {
    image: `bedroom2.jpg`,
    thumbImage: `bedroom2.jpg`
  }, {
    image: `kitchen1.jpg`,
    thumbImage: `kitchen1.jpg`,
    title: 'Kitchen'
  }, {
    image: `kitchen2.jpg`,
    thumbImage: `kitchen2.jpg`
  }];

  prevPhoto() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.photos.length - 1;
    }
  }

  nextPhoto() {
    if (this.currentIndex < this.photos.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  scrollToSection(event: any): void {
    let photo = this.photos.find(x => x.title === event.tab.textLabel);
    if (photo) {
      this.currentIndex = this.photos.indexOf(photo);
    }
  }
}
