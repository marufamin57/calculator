import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TailwindComponent} from "./tailwind/tailwind.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TailwindComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
}
