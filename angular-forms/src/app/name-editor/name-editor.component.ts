import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {

  name = new FormControl();

  constructor() { }

  ngOnInit() {
  }
  //los valores de los fromControl se deben setear desde la funcion setValue
  updateName(name :string):void{
    this.name.setValue(name);
  }
}
