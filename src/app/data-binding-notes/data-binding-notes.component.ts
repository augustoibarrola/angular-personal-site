import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-notes',
  templateUrl: './data-binding-notes.component.html',
  styleUrls: ['./data-binding-notes.component.css']
})
export class DataBindingNotesComponent implements OnInit {


  dataBinders:object[] = [
    {name: "Interpolation", syntax: "{{property}}", description: "links the template to desired respective component's class property" },
    {name: "Property Binding", syntax: "[property] = \"component-variable\"", description: "links the template to desired respective component's class property through a tag's attribute place within []" },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
