import styled from 'styled-components'

export const Card = styled.div`
  border-radius: ${(p) => p.theme.borderRadius.base};
`

export const Cover = styled.img`
  position: relative;
  height: 170px;
`

export const Logo = styled.img`
  position: absolute;
  left: ${(p) => p.theme.space.lg}px;
  bottom: -24px;

  size: 82px;

  border-radius: 50%;
`

export const Content = styled.div`
  margin: ${(p) => p.theme.space.lg}px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  font-size: ${(p) => p.theme.fontSizes.md};
  font-weight: ${(p) => p.theme.fontWeights.bold};
`

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Tag = styled.span`
  background-color: ${(p) => p.theme.colors.pebble};
  border-radius: ${(p) => p.theme.borderRadius.base / 2};
  font-size: ${(p) => p.theme.fontSizes.small};

  margin-right: ${(p) => p.theme.space.small}px;
  margin-bottom: ${(p) => p.theme.space.small}px;
`

export const Description = styled.p`
  flex-grow: 1;
`
