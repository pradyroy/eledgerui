import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EledgerService } from '../eledger.service';
import { WalletData } from '../walletdata';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  wallet: WalletData;
  response: any;

  ngOnInit() {


  }


  customerForm = this.fb.group({
    name: ['', Validators.required],
    mobile: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
    private eledgerService: EledgerService) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.customerForm.value);
    this.eledgerService.addCustomer(this.wallet).subscribe(
      resp => {
        this.response.push({
          lenderId: "this.wallet.lenderId",
          amount: 44,
          txnType: "this.wallet.txnType",
          comment: "this.wallet.comment"
        })
        console.log(this.response);


      }
    );
  }

}
