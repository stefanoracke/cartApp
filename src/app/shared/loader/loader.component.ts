import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor() { }
  @Input() display = 0;
 
  ngOnInit(): void {
    console.log(this.isDashboard())
  }

  isAnyone(){
    return this.display == 0;
  }

  isDashboard(){
    return this.display == 1;
  }

}
