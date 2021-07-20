import { Component, OnInit, AfterViewInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

declare var $: any;

@Component({
    selector: 'app-favorite',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.scss'],
    animations: [routerTransition()]
})
export class FavoriteComponent implements OnInit {
    constructor() {
    }
    ngOnInit() {
    }

}
