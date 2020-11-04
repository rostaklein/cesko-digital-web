import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 453px;
  background-color: white;

  border-radius: ${(p) => p.theme.borderRadius.base}px;
  border: 2px solid ${(p) => p.theme.colors.pebble};
  overflow: hidden;
`

export const Header = styled.div`
  position: relative;
  height: 170px;
`

export const Cover = styled.div<{ url: string }>`
  position: absolute;
  width: 100%;
  height: 100%;

  background-image: url(${(p) => p.url});
  background-position: center;
  background-size: cover;
`
Cover.defaultProps = {
  role: 'img',
}

export const Logo = styled.div<{ url: string }>`
  position: absolute;
  left: ${(p) => p.theme.space.lg}px;
  bottom: -24px;

  width: 82px;
  height: 82px;

  background-color: white;
  background-image: url(${(p) => p.url});
  background-position: center;
  background-size: cover;

  border-radius: 50%;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 1px 2px rgba(8, 8, 49, 0.12);
`
Logo.defaultProps = {
  role: 'img',
}

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: ${(p) => p.theme.space.lg}px;
`

export const Title = styled.p`
  font-size: ${(p) => p.theme.fontSizes.md}px;
  font-weight: ${(p) => p.theme.fontWeights.bold};
`

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  list-style: none;
  margin: 0;
  padding: 0;
`

export const Tag = styled.li`
  background-color: ${(p) => p.theme.colors.pebble};
  border-radius: ${(p) => p.theme.borderRadius.base / 2};

  font-size: ${(p) => p.theme.fontSizes.small};

  margin-right: ${(p) => p.theme.space.small}px;
  margin-bottom: ${(p) => p.theme.space.small}px;
  padding: ${(p) => p.theme.space.small}px;
`

export const Description = styled.p`
  flex-grow: 1;
`
