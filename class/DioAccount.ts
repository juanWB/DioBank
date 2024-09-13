export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  protected balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }


  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(value > 0){
      if(this.validateStatus()){
        this.balance += value
        console.log('Valor depositado R$' + value)
        console.log('Saldo atual: ' + this.getBalance())
      }
    }else{
      console.log('O valor do depósito deve ser positivo')
    }
      
  }

  withdraw = (value: number): void => {
    if(value > 0){
      if(this.validateStatus() ){
        if( this.balance >= value ) {
          this.balance -= value
          console.log('Você sacou R$' + value)
          console.log('Saldo atual: ' + this.getBalance())
        }else{
          console.log('Saldo incompatível com o valor desejado!')
        }
      }
    } else {
      console.log('O valor do depósito deve ser positivo')
    }
     
  }

  getBalance = (): number => {
    return this.balance
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
