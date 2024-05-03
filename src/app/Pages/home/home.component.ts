import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nome = "";
  sobrenome = "";

  _fb = inject(FormBuilder)

  dadosPessoa = this._fb.group({
    nomePessoa: ["", Validators.required],
    sobrenomePessoa: ["", Validators.required]
  });

  submit() {
    console.log(this.dadosPessoa.valid)
  }
}
