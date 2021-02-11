import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataCalculationService } from '../core/services/data-calculation.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Output() closeNav: EventEmitter<any>;
  constructor(
    private _snackBar: MatSnackBar,
    private _dataCalculationService: DataCalculationService) {
    this.closeNav = new EventEmitter();
  }

  ngOnInit(): void {
  }

  checkData() {
    if (!this._dataCalculationService.hasValue) {
      this._snackBar.open("Nhập ngày sinh nào", "Âu kê", {
        duration: 2000,
        verticalPosition: 'top'
      });
    }
    this.closeNavBar();
  }

  closeNavBar() {
    this.closeNav.emit(true);
  }
}
