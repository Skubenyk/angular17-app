import { ErrorService } from './../../services/error.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrl: './global-error.component.scss',
})
export class GlobalErrorComponent implements OnInit {
  constructor(public errorService: ErrorService) {}

  ngOnInit(): void {}
}
