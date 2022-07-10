import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AdminGuard } from './core/utils/guards/admin.guard';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
  
  {
    path: "",
    loadChildren: () =>
      import("./features/public/public.module").then((m) => m.PublicModule),
  },
  {
    path: "admin",
    loadChildren: () =>
    import("./features/backoffice/backoffice.module").then((m) => m.BackofficeModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
