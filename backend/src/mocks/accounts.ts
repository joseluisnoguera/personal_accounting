import { Account } from 'src/models/Account'

export const accounts: Account[] = [
  {
    id: 1,
    name: 'Jose Mourinho',
    email: 'j.mourinho@gmail.com',
    type: 'saving',
    status: 'green',
    created_date: Date.now(),
    updated_date: Date.now(),
    balance: 1234912.23,
  },
  {
    id: 2,
    name: 'Rocio Sanchez',
    email: 'r.sanchez@gmail.com',
    type: 'saving',
    status: 'green',
    created_date: Date.now(),
    updated_date: Date.now(),
    balance: 105912.12,
  },
]
