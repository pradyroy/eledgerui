import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EledgerLoginComponent } from './eledger-login/eledger-login.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { HomeComponent } from './home/home.component';
import { AddCreditComponent } from './add-credit/add-credit.component';

const routes: Routes = [
  { path: 'login', component: EledgerLoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'addcustomer', component: AddCustomerComponent },
  { path: 'credit', component: AddCreditComponent },
  { path: 'editcustomer', component: EditCustomerComponent},
  { path: '**', component: EledgerLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }