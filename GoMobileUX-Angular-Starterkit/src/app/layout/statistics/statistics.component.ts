import { Component, OnInit, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {
    SwiperComponent,
    SwiperDirective,
    SwiperConfigInterface,
    SwiperScrollbarInterface,
    SwiperPaginationInterface
} from 'ngx-swiper-wrapper';

declare var $: any;

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.scss'],
    animations: [routerTransition()]
})
export class StatisticsComponent implements OnInit {
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

    // barcharts chart
    public barchartsOptions: any = {
        responsive: true,
                legend: {
                    display: false
                },
                title: {
                    display: false,
                    text: 'Chart.js Line Chart'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: 'Value'
                        }
                    }]
                }
    };
    public barchartsLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'june', 'july'];
    public barchartsType: string;
    public barchartsLegend: boolean;

    public barchartsData: any[] = [{
        label: 'My First dataset',
        backgroundColor: '#FF0068',
        borderColor: '#FF0068',
        data: [45, 56, 52, 45, 36, 40, 50, 60],
        fill: false,
    }];

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public randomize(): void {}

    ngOnInit() {
        this.barchartsType = 'line';
    }

}
