import styled from '@emotion/styled'

export const PokemonListContainer = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.indents.xs};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`
