import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server-error',
    templateUrl: './server-error.component.html',
    styleUrls: ['./server-error.component.scss']
})
export class ServerErrorComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        (document.querySelector('.loader-screen') as HTMLElement).style.display = 'none';
    }
}
