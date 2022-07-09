import { AccountDetails } from 'src/models/Account'

export const accounts: AccountDetails[] = [
  {
    account_id: 1,
    account_name: 'Jose Mourinho',
    account_type: 'saving',
    account_status: 'green',
    account_created_date: Date.now(),
    account_updated_date: Date.now(),
    account_balance: 1234912.23,
  },
  {
    account_id: 2,
    account_name: 'Rocio Sanchez',
    account_type: 'saving',
    account_status: 'green',
    account_created_date: Date.now(),
    account_updated_date: Date.now(),
    account_balance: 105912.12,
  },
]
