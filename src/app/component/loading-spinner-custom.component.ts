import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingSpinnerService } from '../service/loading-spinner.service';

@Component({
  selector: 'app-loading-spinner-custom',
  templateUrl: './loading-spinner-custom.component.html',
  styleUrls: ['./loading-spinner-custom.component.css']
})
export class LoadingSpinnerCustomComponent {

  /** スピナーの表示、非表示フラグ */
  public isLoading: Subject<boolean> = this.loadingspinnerService.isLoading;

  constructor(private loadingspinnerService: LoadingSpinnerService) {}

}
