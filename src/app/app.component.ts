import { Component, ViewChild } from '@angular/core';
import { CarouselComponent } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true
})
export class AppComponent {
  title: string = '1705 David'
  @ViewChild('owlElement') owlElement!: CarouselComponent;

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
  ]

  slides = [
    { image: 'public/living-room1.jpg', alt: 'Living Room 1' },
    { image: 'public/living-room2.jpg', alt: 'Living Room 2' },
    { image: 'public/bedroom1.jpg', alt: 'Bedroom 1' },
    { image: 'public/bedroom2.jpg', alt: 'Bedroom 2' },
    { image: 'public/kitchen1.jpg', alt: 'Kitchen 1' },
    { image: 'public/kitchen2.jpg', alt: 'Kitchen 2' },
    // Add more images as needed
  ];

  carouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };

  scrollToSection(index: number) {
    const sectionIndex = [0, 2, 4]; // Living Room starts at 0, Bedroom at 2, Kitchen at 4
    this.owlElement.to([sectionIndex[index]].toString());
  }
}
