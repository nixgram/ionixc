import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./screens/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
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
  },  {
    path: 'splash',
    loadChildren: () => import('./screens/splash/splash.module').then( m => m.SplashPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
