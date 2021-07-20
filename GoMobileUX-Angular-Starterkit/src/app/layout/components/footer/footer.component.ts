import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    @HostBinding('style.top') marginTop: string;

    constructor(private translate: TranslateService, public router: Router) {
        this.router.events.subscribe(val => {});
    }

    ngOnInit() {

        const marginTops: any = document.querySelector('.footer').clientHeight;
       // this.marginTop = '-' + marginTops + 'px';

    }
    eventCalled() {}
}
