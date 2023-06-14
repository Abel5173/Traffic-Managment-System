import { Component } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';
import { DashboardLayout } from '@syncfusion/ej2-angular-layouts';
import { TextBox } from '@syncfusion/ej2-angular-inputs';
import { AccidentFormService } from '../Services/accident-form.service';  

@Component({
  selector: 'app-accident-form',
  templateUrl: './accident-form.component.html',
  styleUrls: ['./accident-form.component.css']
})

export class AccidentFormComponent {

  constructor(private accidentFormService: AccidentFormService){}

  public data: string[] = ['Item 1', 'Item 2', 'Item 3'];
  public data1: string[] = ['Item 1', 'Item 2', 'Item 3'];
  public cellSpacing: number[] = [10, 10];
  public columns: number = 6;
    public panels: any = [
      {
        'id':'Panel0', 
        'sizeX': 0.5, 
        'sizeY': 1,
        'row': 0, 
        'col': 0,
         header:'<div>General</div>', content:`<div class="content">
             <div class="e-input-group">
                <input class="e-input" name='input' type="text" 
                placeholder = "Enter Date" />
                <span class="e-input-group-icon e-input-popup-date"></span>
             </div>
         <div>`
        },
    {
      'id':'Panel1',
       'sizeX': 0.5, 
       'sizeY': 1,
       'row': 0, 
       'col': 1,
        header:'<div>Panel 1</div>', 
        content:`<div class="content">
        <div class="e-input-group">
           <input class="e-input" name='input' type="text" (focus)="focusIn($event.target)"
           placeholder = "Enter Date" (blur)="focusOut($event.target)"/>
           <span class="e-input-group-icon e-input-popup-date" (mouseup)="onMouseUp($event.target)" (mousedown)="onMouseDown($event.target)"></span>
           </div>
    <div>`
      },
    {
      'id':'Panel2', 
      'sizeX': 1, 
      'sizeY': 3,
      'row': 0, 
      'col': 2, 
      header:'<div>Panel 2</div>', 
      content:`<div class="content">
      <div class="e-input-group">
         <input class="e-input" name='input' type="text" (focus)="focusIn($event.target)"
         placeholder = "Enter Date" (blur)="focusOut($event.target)"/>
         <span class="e-input-group-icon e-input-popup-date" (mouseup)="onMouseUp($event.target)" (mousedown)="onMouseDown($event.target)"></span>
         </div>
  <div>`
    },
    {
      'id':'Panel3',
       'sizeX': 1, 
       'sizeY': 1,
       'row': 1, 
       'col': 0,
        header:'<div>Panel 3</div>',
        content:'<div class="content">Panel Content<div>'
    },
    {
      'id':'Panel4', 
      'sizeX': 2, 
      'sizeY': 1,
      'row': 2, 
      'col': 0, 
      header:'<div>Panel 4</div>', 
      content:'<div class="content">Panel Content<div>'
    },
    {
      'id':'Panel5', 
      'sizeX': 1, 
      'sizeY': 1,
      'row': 2, 
      'col': 2, 
      header:'<div>Panel 5</div>', 
      content:'<div class="content">Panel Content<div>'
    },
    {
      'id':'Panel6',
      'sizeX': 1,
       'sizeY': 1,
       'row': 2, 
       'col': 3,
        header:'<div>Panel 6</div>', 
        content:'<div class="content">Panel Content<div>'
      }
    ]
    
}
