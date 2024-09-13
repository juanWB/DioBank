import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if(value > 0) {
      if(this.validateStatus()){
        this.balance += value
        console.log('Empréstimo realizado com sucesso.')
        console.log('Saldo atual: R$' + this.getBalance())
      }
    }else{
      console.log('O valor do depósito deve ser positivo')
    }
    
    
  }
}
