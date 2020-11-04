import React, { FC } from 'react'
import styled from 'styled-components'
import * as S from './styles'

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
    <S.Header>
      <S.Cover url={cover} aria-label="Cover photo of the project" />
      <S.Logo url={logo} aria-label="Logo of the project" />
    </S.Header>
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
