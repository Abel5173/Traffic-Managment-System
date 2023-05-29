import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.css']
})
export class AccidentComponent {
  constructor(private router: Router){}
}
