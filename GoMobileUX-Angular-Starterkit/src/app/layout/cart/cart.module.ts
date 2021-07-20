import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbDropdownModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

import { CartsModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        CartsModule,
        StatModule,
        NgbDropdownModule,
        NgbTabsetModule,
    ],
    declarations: [CartComponent],

})
export class CartModule {}
