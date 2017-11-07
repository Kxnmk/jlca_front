import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-demanda',
  templateUrl: './demanda.component.html',
  styleUrls: ['./demanda.component.css']
})
export class DemandaComponent implements OnInit {

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  selectModal(){

  }

}
