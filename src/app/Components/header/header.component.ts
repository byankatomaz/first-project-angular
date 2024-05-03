import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutComponent } from '../../Pages/about/about.component';
import { HomeComponent } from '../../Pages/home/home.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
