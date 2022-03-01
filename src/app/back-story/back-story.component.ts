import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-story',
  templateUrl: './back-story.component.html',
  styleUrls: ['./back-story.component.css']
})
export class BackStoryComponent implements OnInit {

  constructor() { }
  homeTown: string = "Narnia";
  profession: string = "farmer";

  showStory: boolean = false;
  buttonText: string = "Show";

  toggleStory(): void{
    this.showStory = !this.showStory;
    if (this.showStory){
      this.buttonText = "Hide";
    }else {
      this.buttonText = "Show";
    }
  }
  ngOnInit(): void {
  }

}
