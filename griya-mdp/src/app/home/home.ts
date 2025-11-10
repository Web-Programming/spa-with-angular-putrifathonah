import { Component } from '@angular/core';
import { LokasiPerumahan } from '../lokasi-perumahan/lokasi-perumahan';

@Component({
  selector: 'app-home',
  // import lokasi perumahan
  imports: [LokasiPerumahan],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  number: number[] = [1,2,3,4,5]
}
