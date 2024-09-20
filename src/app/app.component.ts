import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisteredFontAwesomeIconsModule } from './shared/icons/registered-font-awesome-icons.module';

@Component({
  selector: 'sb-root',
  standalone: true,
  imports: [RouterOutlet, RegisteredFontAwesomeIconsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sandbox';
}
