import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProgressiveService } from 'app/progressive-tax/progressive.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-progressive-tax',
  templateUrl: './progressive-tax.component.html',
  styleUrls: ['./progressive-tax.component.css']
})
export class ProgressiveTaxComponent implements OnInit, OnChanges {
  @Input() salary = 0;
  registerForm: FormGroup;

  constructor(private _service: ProgressiveService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      salaryField: [this.salary, Validators.required],
      taxes: '',
      netto: ''
    });
  }
  ngOnChanges() {
    console.log(this.salary);
  }
  public Run() {
    this.registerForm.controls['taxes'].setValue(
      this._service.getTaxes(this.registerForm.controls['salaryField'].value));
  }
  public clearSalary() {
    this.registerForm.controls['salaryField'].setValue('');
    this.registerForm.controls['salaryField'].updateValueAndValidity({ onlySelf: true });
  }
}
