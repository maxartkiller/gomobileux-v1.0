import { Component, OnInit, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

declare var $: any;

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    animations: [routerTransition()]
})
export class CartComponent implements OnInit {
    constructor() {
    }
    ngOnInit() {
    }

}
