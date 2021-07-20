import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbDropdownModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG  } from 'ngx-swiper-wrapper';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StatModule } from '../../shared';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
   
};

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        DashboardRoutingModule,
        StatModule,
        NgbDropdownModule,
        NgbTabsetModule,
        SwiperModule,
    ],
    declarations: [
        DashboardComponent
    ],
    providers: [
        {
          provide: SWIPER_CONFIG,
          useValue: DEFAULT_SWIPER_CONFIG
        }
      ]
})
export class DashboardModule {}
