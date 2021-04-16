import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    RouterModule,
    MatSnackBarModule,
    FormsModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
