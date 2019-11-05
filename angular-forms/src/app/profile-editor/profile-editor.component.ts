import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  //Creamos un grupo de controles
  profileFormDeclaradoConCodigo = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl(),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
 //este esta creado con un FormBuilder para no tener que picar todo el FormGruop
 // creamos los grupos con el formbuilder y los fromcontrol solo con la expresion [''] 
 // pudiendo añadir las validaciones necesarias con ['', Validators.required]
  profileForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(4)]],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    //creamos un Array de controls
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(public fb : FormBuilder) {}

  ngOnInit() {
  }

  onSubmit(): void{
    console.log(this.profileForm.value);
  }
  //patchValue actualiza el valor del FormGruop
  update():void{
    this.profileForm.patchValue({
      firstName: 'greter',
      address: {
        city: 'Barcelona'
      }
    });
  }
//declaramos el get para no tner que acceder a las funciones get dentro del template
  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }
//creamos un getter para ver si el campo es valido
  get firstName(){
    return this.profileForm.get('firstName');
  }

  addAlias(){
    this.aliases.push(this.fb.control(''));
  }
}
