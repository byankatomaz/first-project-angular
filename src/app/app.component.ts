import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from './Components/input/input.component'; 
import { AboutComponent } from './Pages/about/about.component';
import { HeaderComponent } from './Components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
}
