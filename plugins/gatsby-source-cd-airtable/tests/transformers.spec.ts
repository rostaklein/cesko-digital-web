import { transformProjects, transformTags } from '../src/transformers'

describe('transformers', () => {
  describe('transformProjects', () => {
    test('should transform project without tagline', () => {
      const csName = 'Projekt'
      const enName = 'Project'
      const csTagline = 'Ahoj světe'
      const enTagline = 'Hello World'
      const coverUrl = 'cover'
      const logoUrl = 'logo'
      const csSlug = 'projekt'
      const enSlug = 'project'
      const highlighted = false
      const tags = ['rowId']
      const projects = transformProjects([
        {
          id: 'id',
          fields: {
            csName,
            enName,
            csTagline,
            enTagline,
            coverUrl,
            highlighted,
            tags,
            logoUrl,
            csSlug,
            enSlug,
          },
        },
      ])
      expect(projects).toContainEqual({
        lang: 'en',
        name: enName,
        tagline: enTagline,
        tags,
        highlighted,
        logoUrl,
        coverUrl,
        slug: enSlug,
        rowId: 'id',
      })
      expect(projects).toContainEqual({
        lang: 'cs',
        name: csName,
        tagline: csTagline,
        tags,
        highlighted,
        logoUrl,
        coverUrl,
        slug: csSlug,
        rowId: 'id',
      })
    })
    test('should transform project with tagline', () => {
      const csName = 'Aplikace'
      const enName = 'Applications'
      const csSlug = 'aplikace'
      const enSlug = 'applications'
      const tags = transformTags([
        {
          id: 'id',
          fields: {
            csName,
            enName,
            csSlug,
            enSlug,
          },
        },
      ])
      expect(tags).toContainEqual({
        lang: 'cs',
        name: csName,
        slug: csSlug,
        rowId: 'id',
      })
      expect(tags).toContainEqual({
        lang: 'en',
        name: enName,
        slug: enSlug,
        rowId: 'id',
      })
    })
  })
})
