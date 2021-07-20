import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {
    SwiperComponent,
    SwiperDirective,
    SwiperConfigInterface,
    SwiperScrollbarInterface,
    SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

import 'swiper/dist/css/swiper.min.css';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public configurations: SwiperConfigInterface = {
        direction: 'horizontal',
        slidesPerView: 'auto',
        keyboard: true,
        mousewheel: true,
        scrollbar: false,
        navigation: true,
        pagination: true
    };

    public configurations2: SwiperConfigInterface = {
        slidesPerView: 5,
        spaceBetween: 0,
        pagination: {
            el: '.swiper-pagination'
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 0
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 0
            }
        }
    };

    constructor() {
    }

    public randomize(): void {}

    ngOnInit() {
    }
}
