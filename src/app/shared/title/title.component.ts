import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor() { }

  @Input() image = "./../../../../../assets/products.png"
  @Input() title = "Hola Mundo"
  ngOnInit(): void {
  }

}
