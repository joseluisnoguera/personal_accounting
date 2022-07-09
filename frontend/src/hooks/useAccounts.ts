import { useQuery } from 'react-query'
import axios from 'axios'

const getAccounts = async () => {
  const { data } = await axios.get(
    'http://localhost:3005/'
  )
  return data
}

export default function useAccounts () {
  return useQuery('accounts', getAccounts)
}
