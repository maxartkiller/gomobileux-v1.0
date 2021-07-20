import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbDropdownModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { GaugeChartModule } from 'angular-gauge-chart';
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG  } from 'ngx-swiper-wrapper';

import { StatisticssModule } from './statistics-routing.module';
import { StatisticsComponent } from './statistics.component';
import { StatModule } from '../../shared';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {};

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        StatisticssModule,
        StatModule,
        NgbDropdownModule,
        SwiperModule,
        Ng2Charts,
        NgbTabsetModule,
        GaugeChartModule,
        // Specify ng-circle-progress as an import
        NgCircleProgressModule.forRoot({
            // set defaults here
            radius: 50,
            outerStrokeWidth: 16,
            innerStrokeWidth: 8,
            outerStrokeColor: '#78C000',
            innerStrokeColor: '#C7E596',
            animationDuration: 300
        })
    ],
    declarations: [StatisticsComponent],
    providers: [
        {
          provide: SWIPER_CONFIG,
          useValue: DEFAULT_SWIPER_CONFIG
        }
      ]
})
export class StatisticsModule {}
