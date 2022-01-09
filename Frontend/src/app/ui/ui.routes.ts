import { Routes } from '@angular/router';

// Components
import {AccountComponent} from "./account/account.component";
import {ErrorComponent} from "./error/error.component";
import {HomeComponent} from "./home/home.component";
import {TransactionComponent} from "./transaction/transaction.component";
import { PlayGameComponent } from './play-game/play-game.component';

export const UiRoute: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'money', component: TransactionComponent },
  { path: 'play-game', component: PlayGameComponent },
  { path: 'home', component: HomeComponent},
  { path: 'account', component: AccountComponent},
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '/404' },
];
