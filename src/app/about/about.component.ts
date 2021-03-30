import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private metaTagsService: Meta) { }

  ngOnInit(): void {
    this.metaTagsService.addTags(
      [
        {
          property: 'og:title',
          content: 'About developer'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:image:url',
          content: 'https://dummy-numerology.herokuapp.com/assets/images/cat1.jpg'
        },
        {
          property: 'og:image',
          content: 'https://dummy-numerology.herokuapp.com/assets/images/cat1.jpg'
        },
        {
          property: 'og:description',
          content: 'Site description'
        }
      ]
    )
  }

}
