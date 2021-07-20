import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule, NgbDropdownModule, NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';

import { FavoritesModule } from './favorite-routing.module';
import { FavoriteComponent } from './favorite.component';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule,
        NgbAlertModule,
        FavoritesModule,
        StatModule,
        NgbDropdownModule,
        NgbTabsetModule,
    
    ],
    declarations: [FavoriteComponent],

})
export class FavoriteModule {}
