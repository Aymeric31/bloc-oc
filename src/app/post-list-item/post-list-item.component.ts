import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIt: number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }
  onLoveIt() {
    this.loveIt++;
    console.log('love = ' + this.loveIt);
  }
  onDontLoveIt() {
    this.loveIt--;
    console.log('love = ' + this.loveIt);
  }
}
