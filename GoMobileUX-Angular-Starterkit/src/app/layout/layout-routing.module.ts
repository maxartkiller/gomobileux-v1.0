import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'statistics', loadChildren: () => import('./statistics/statistics.module').then(m => m.StatisticsModule)},
            { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)},
            { path: 'favorite', loadChildren: () => import('./favorite/favorite.module').then(m => m.FavoriteModule)},
            { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
