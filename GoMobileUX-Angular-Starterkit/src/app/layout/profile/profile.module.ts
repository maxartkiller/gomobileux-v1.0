import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbDropdownModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

import { ProfilesModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        ProfilesModule,
        StatModule,
        NgbDropdownModule,
        NgbTabsetModule,
        // Specify ng-circle-progress as an import
    ],
    declarations: [ProfileComponent],

})
export class ProfileModule {}
