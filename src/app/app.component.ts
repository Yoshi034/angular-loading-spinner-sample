import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { LoadingSpinnerService } from './service/loading-spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loadingSpinnerService: LoadingSpinnerService) {}

  onClick(){
    // スピナー表示
    this.loadingSpinnerService.show();
    
    // API呼び出しの仮実装(5秒間待機する)
    of().pipe(delay(5000),finalize(()=>{
      // スピナー非表示
      this.loadingSpinnerService.hide();
    })).subscribe();
  }
}
