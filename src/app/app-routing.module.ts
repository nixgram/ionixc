import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./screens/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./screens/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./screens/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./screens/splash/splash.module').then(m => m.SplashPageModule)
  },  {
    path: 'dashboard',
    loadChildren: () => import('./screens/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./screens/profile/profile.module').then( m => m.ProfilePageModule)
  },

  // {
  //   path: 'home-detail',
  //   loadChildren: () => import('./screens/home-detail/home-detail.module').then( m => m.HomeDetailPageModule)
  // }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
