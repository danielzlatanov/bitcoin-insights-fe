import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  declarations: [HomeComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  providers: [],
  exports: [],
  exports: [HeaderComponent],
})
export class CoreModule {}
