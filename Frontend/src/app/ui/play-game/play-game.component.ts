import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ContractService } from "src/app/services/contract/contract.service";


@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss']
})

export class PlayGameComponent implements OnInit {

  mint:boolean;
  cantidad:number;
  address: string;
  amount: number;
  direction: any;
  transactionForm: FormGroup;

  constructor(private fb: FormBuilder, private contract: ContractService) {
    this.mint;
    this.cantidad;
    this.transactionForm = new FormGroup({
        sendaddress: new FormControl("", [Validators.required]),
        amount: new FormControl("", [Validators.required]),
      });


    contract
      .connectAccount()
      .then((value: any) => {
        this.direction = value;
      })
      .catch((error: any) => {
        console.log(error);
        contract.failure(
          "Could't get the account data, please check if metamask is running correctly and refresh the page"
        );
      });
  }

  ngOnInit(): void {
    console.log("Hola Mundo 1");
    this.transactionForm.valueChanges.subscribe((x) => {
    });
  }

  sendEth(e) {
    console.log(e);
    this.address = this.transactionForm.value.sendaddress;
    this.amount = this.transactionForm.value.amount;
    
    this.contract
      .trasnferEther(this.direction, this.address, this.amount)
      .then((r) => {
        console.log(r);
        this.contract.success();
      })
      .catch((e) => {
        console.log(e);
        this.contract.failure("Transaction failed");
      });
  }
  createnft(){

    console.log(this.mint);
    console.log('---------------');
    console.log(this.cantidad);

  }
}
