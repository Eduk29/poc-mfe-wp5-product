import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  title = "App Product";

  constructor() { }

  ngOnInit(): void {
  }

  displayClass(): boolean {
    return location.port === '3002';
  }

}
