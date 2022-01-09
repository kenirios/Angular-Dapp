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
  spin:boolean;
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
    
    this.transactionForm.valueChanges.subscribe((x) => {
    });
  }

  

  createnft(){
   
    console.log('Crear NFT');
    this.spin = true;
  }


}
