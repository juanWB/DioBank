import { DioAccount } from "./DioAccount";

export class EmployeeAccount extends DioAccount{
  
   EmployeeDeposit = (value: number) : void =>{
       console.log('Depósito realizado')
       console.log('Bonus de R$10 acrescentado!!!') 
       value += 10;
       this.balance += value;
       console.log('Saldo atual: ' + this.getBalance())
   }

  

}