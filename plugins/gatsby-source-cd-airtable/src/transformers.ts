import { AirTableProject, AirTableTag } from './interfaces/airtable-project'
import { Project, Tag } from './interfaces/project'

export const transformProjects = (
  airtableProjects: AirTableProject[]
): Project[] => {
  return airtableProjects
    .map((airTableProject) => {
      const base = {
        tags: airTableProject.fields.tags || [],
        highlighted: airTableProject.fields.highlighted,
        coverUrl: airTableProject.fields.coverUrl,
        logoUrl: airTableProject.fields.logoUrl,
      }

      return [
        {
          ...base,
          rowId: airTableProject.id,
          name: airTableProject.fields.enName,
          tagline: airTableProject.fields.enTagline,
          slug: airTableProject.fields.enSlug,
          lang: 'en',
        },
        {
          ...base,
          rowId: airTableProject.id,
          name: airTableProject.fields.csName,
          tagline: airTableProject.fields.csTagline,
          slug: airTableProject.fields.csSlug,
          lang: 'cs',
        },
      ]
    })
    .reduce(
      (projects: Project[], langProjects) => [...projects, ...langProjects],
      []
    )
}

export const transformTags = (airTableTags: AirTableTag[]): Tag[] => {
  return airTableTags
    .map((airTableTag) => {
      return [
        {
          rowId: airTableTag.id,
          name: airTableTag.fields.enName,
          slug: airTableTag.fields.enSlug,
          lang: 'en',
        },
        {
          rowId: airTableTag.id,
          name: airTableTag.fields.csName,
          slug: airTableTag.fields.csSlug,
          lang: 'cs',
        },
      ]
    })
    .reduce((tags: Tag[], langProjects) => [...tags, ...langProjects], [])
}

interface IdParams {
  lang: string
  rowId: string
}

export const getProjectId = ({ lang, rowId }: IdParams): string =>
  `${lang}-Project-${rowId}`

export const getTagId = ({ lang, rowId }: IdParams): string =>
  `${lang}-Tag-${rowId}`
