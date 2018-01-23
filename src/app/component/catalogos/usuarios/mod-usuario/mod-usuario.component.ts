import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mod-usuario',
  templateUrl: './mod-usuario.component.html',
  styleUrls: ['./mod-usuario.component.css'],
})
export class ModUsuarioComponent implements OnInit {
  index: number;
  private sub: any;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      try {
        this.index = +params['id'];
        console.log(this.index);
      }catch (err) {
        console.log(err);
      }
    });
  }

}
