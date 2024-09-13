import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { EmployeeAccount } from './class/EmployeeAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Juan', 10)
peopleAccount.deposit(50)
peopleAccount.withdraw(10)
console.log('----------------------')

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(50)
companyAccount.withdraw(25)
companyAccount.getLoan(500)
console.log('----------------------')

const employeeAccount: EmployeeAccount = new EmployeeAccount('Jefrey', 20)
employeeAccount.EmployeeDeposit(50)
employeeAccount.withdraw(5)




