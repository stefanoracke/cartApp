import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }


  navigatorList = [
    {
      title: "Adminstration",
      url: "/admin",
      icon: "../../../../../assets/svgs/adming.svg"
    },
    {
      title: "Dashboard",
      url: "/admin",
      icon: "../../../../../assets/svgs/home.svg"
    },
    {
      title: "Products",
      url: "/admin/products",
      icon: "../../../../../assets/svgs/product.svg"
    },
    {
      title: "Sales",
      url: "/admin/orders",
      icon: "../../../../../assets/svgs/truck.svg"
    },
    {
      title: "Cart App",
      url: "/catalogue",
      icon: "../../../../../assets/svgs/arrow-left.svg"
    }
  ]

  ngOnInit(): void {
  }

}
