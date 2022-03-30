import styled from '@emotion/styled'
// local libs

export const PokemonInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
export const PokemonImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: ${({ theme }) => theme.borderRadius.s};
  background: ${({ theme }) => theme.colors.basicLightWithOpacity};
  backdrop-filter: blur(16px);
`
export const PokemonImage = styled.img`
  width: auto;
  height: 300px;
`

export const PokemonInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 50%;
`

export const PokemonName = styled.div`
  padding-left: ${({ theme }) => theme.indents.m};
  margin-top: ${({ theme }) => theme.indents.xs};

  color: ${({ theme }) => theme.textColors.basic};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  text-transform: uppercase;
`

export const PokemonInfoItems = styled.div`
  display: flex;
  flex-direction: column;

  height: auto;

  padding: ${({ theme }) => theme.indents.s} 0;
`

export const PokemonInfoItem = styled.div`
  display: flex;
  align-items: center;

  height: 75px;

  padding-left: ${({ theme }) => theme.indents.m};

  border: ${({ theme }) => `4px ${theme.colors.basicLight}`};
  border-style: none none solid none;

  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 500;
  color: ${({ theme }) => theme.textColors.basic};
`
export const PokemonNavigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  padding-left: ${({ theme }) => theme.indents.m};
`
