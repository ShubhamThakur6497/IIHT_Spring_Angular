import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {

  @Input() bookToUpdate: any;
  @Output() updateBook:any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
