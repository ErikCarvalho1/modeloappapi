import { LoginPageModule } from './pages/login/login.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Auth } from './services/auth';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  {
    path: 'home',
        canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'usuario-add',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/usuarios/usuario-add/usuario-add.module').then( m => m.UsuarioAddPageModule)
  },
  {
    path: 'usuario-list',
        canActivate: [AuthGuard],
    loadChildren: () => import('./pages/usuarios/usuario-list/usuario-list.module').then( m => m.UsuarioListPageModule)
  },
  {
    path: 'usuario-edit/:id',
        canActivate: [AuthGuard],
    loadChildren: () => import('./pages/usuarios/usuario-edit/usuario-edit.module').then( m => m.UsuarioEditPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then( m => m.SplashPageModule)
  },
  
  {
    path: 'cliente-add',
    loadChildren: () => import('./pages/cliente-add/cliente-add.module').then( m => m.ClienteAddPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
