import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbTabsetModule, NgbDatepickerModule, NgbModalModule  } from '@ng-bootstrap/ng-bootstrap';
import { GaugeChartModule } from 'angular-gauge-chart';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        NgbTabsetModule,
        NgbModalModule,
        NgbDatepickerModule,
        GaugeChartModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, FooterComponent ]
})
export class LayoutModule {}
