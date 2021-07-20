import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    showMenu: string;

    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(private translate: TranslateService, public router: Router) {
        this.router.events.subscribe(val => {

        });
    }

    ngOnInit() {
        this.showMenu = '';
    }


    eventCalled() {
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        if (window.innerWidth <= 992) {
            if (dom.classList.contains('sidemenu-open')) {
                dom.classList.remove('sidemenu-open');
                setTimeout(() => {
                    dom.classList.remove('menuactive');
                }, 800);
            }
        }
    }


}
