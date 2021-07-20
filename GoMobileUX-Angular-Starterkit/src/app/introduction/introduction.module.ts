import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG  } from 'ngx-swiper-wrapper';

import { IntroductionRoutingModule } from './introduction-routing.module';
import { IntroductionComponent } from './introduction.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
};

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        IntroductionRoutingModule,
        SwiperModule
    ],
    declarations: [IntroductionComponent],
    providers: [
        {
          provide: SWIPER_CONFIG,
          useValue: DEFAULT_SWIPER_CONFIG
        }
      ]
})
export class IntroductionModule {}
