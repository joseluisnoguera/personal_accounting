import { useInfiniteQuery } from 'react-query'
import axios from 'axios'

const getPokemons = async ({
  pageParam = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
}) => {
  const response = await axios.get(pageParam)
  const { results, next } = response.data
  return { response: results, nextPage: next }
}

export default function useInfiniteListPokemons () {
  return useInfiniteQuery('pokemons', getPokemons, {
    getNextPageParam: (lastPage) => lastPage.nextPage
  })
}
