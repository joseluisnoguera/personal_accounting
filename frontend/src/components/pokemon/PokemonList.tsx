import { useCallback } from 'react'
import usePokemons from '../../hooks/useInfiniteListPokemons'

const PokemonList = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = usePokemons()

  const buttonText = useCallback(() => {
    if (isFetchingNextPage) {
      return 'Loading...'
    } else if (hasNextPage) {
      return 'Load More'
    } else {
      return 'No more pokemons'
    }
  }, [isFetchingNextPage, hasNextPage])

  return (
    <>
      {
      isLoading
        ? (
          <p>Loading...</p>
          )
        : (
          <>
            <ul>
              {data?.pages.map((group: { response: Array<{ name: string, url: string }> }) =>
                group.response.map((pokemon: { name: string, url: string }) => <a href={pokemon.url}><li>{pokemon.name}</li></a>)
              )}
            </ul>
            <button
              onClick={async () => await fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {buttonText()}
            </button>
          </>
          )
    }
    </>
  )
}

export default PokemonList
