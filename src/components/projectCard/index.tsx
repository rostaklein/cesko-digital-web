import React, { FC } from 'react'
import styled from 'styled-components'
import * as S from './styled'

// Dummy
const Link = styled.a``

interface Props {
  title: string
  description: string
  cover: string
  logo: string
  link: string
  tags: string[]
}

const ProjectCard: FC<Props> = ({
  title,
  description,
  cover,
  logo,
  link,
  tags,
}) => (
  <S.Card>
    <S.Cover src={cover}>
      <S.Logo src={logo} />
    </S.Cover>
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.TagList>
        {tags.map((t) => (
          <S.Tag key={t}>{t}</S.Tag>
        ))}
      </S.TagList>
      <S.Description>{description}</S.Description>
      <Link href={link}>Detail projektu</Link>
    </S.Content>
  </S.Card>
)

export default ProjectCard
