import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

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
  availableForRent: boolean = false;
  emailLink: string = 'mailto:rbrock444@gmail.com?subject=1705%20David%20Rental%20Inquiry';
  title: string = '1705 David';
  currentIndex: number = 0;

  descriptionItems: string[] = [
    '$1300 Month/Deposit',
    'First Month + Deposit',
    '3 bedrooms',
    '1.75 baths',
    '1000 sqft',
    '1 Car Garage',
    'Central Air, Heat',
    'Backyard fence, shed, patio area',
    'Washer, Dryer hookups',
    'Shaded Front Porch',
    'Stand Up Garden Bed',
    'Alma Schrader School District',
    'Quite Neighborhood',
    'Pet Friendly',
    'Initial Pet Fee + Monthly Fee',
  ];

  tabs: any[] = [
    {
      title: 'Yard'
    },
    {
      title: 'Living Room'
    },
    {
      title: 'Kitchen'
    },
    {
      title: 'Bedrooms'
    },
    {
      title: 'Bathrooms'
    }
  ];

  photos = [
    {
      image: `front_1.jpg`,
      thumbImage: `front_1.jpg`,
      title: 'Yard'
    },
    {
      image: `front_2.jpg`,
      thumbImage: `front_2.jpg`,
    },
    {
      image: `backyard_1.jpg`,
      thumbImage: `backyard_1.jpg`,
    },
    {
      image: `backyard_2.jpg`,
      thumbImage: `backyard_2.jpg`,
    },
    {
      image: `living_room_1.jpg`,
      thumbImage: `living_room_1.jpg`,
      title: 'Living Room'
    },
    {
      image: `living_room_2.jpg`,
      thumbImage: `living_room_2.jpg`,
    },
    {
      image: `kitchen_1.jpg`,
      thumbImage: `kitchen_1.jpg`,
      title: 'Kitchen'
    },
    {
      image: `kitchen_2.jpg`,
      thumbImage: `kitchen_2.jpg`
    },
    {
      image: `bedroom1_1.jpg`,
      thumbImage: `bedroom1_1.jpg`,
      title: 'Bedrooms'
    },
    {
      image: `bedroom1_2.jpg`,
      thumbImage: `bedroom1_2.jpg`
    },
    {
      image: `bedroom2_1.jpg`,
      thumbImage: `bedroom2_1.jpg`,
    },
    {
      image: `bedroom2_2.jpg`,
      thumbImage: `bedroom2_2.jpg`
    },
    {
      image: `bedroom3_1.jpg`,
      thumbImage: `bedroom3_1.jpg`,
    },
    {
      image: `bedroom3_2.jpg`,
      thumbImage: `bedroom3_2.jpg`
    },
    {
      image: `bathroom1_1.jpg`,
      thumbImage: `bathroom1_1.jpg`,
      title: 'Bathrooms'
    },
    {
      image: `bathroom1_2.jpg`,
      thumbImage: `bathroom1_2.jpg`
    },
    {
      image: `bathroom2_1.jpg`,
      thumbImage: `bathroom2_1.jpg`,
    },
    {
      image: `bathroom2_2.jpg`,
      thumbImage: `bathroom2_2.jpg`
    },
  ];

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
