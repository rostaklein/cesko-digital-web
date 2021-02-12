import { Project } from '../interfaces/project'

export const getMockProjects: () => Project[] = () => [
  {
    name: 'První projekt',
    rowId: '1',
    lang: 'cs',
    slug: 'prvni-projekt',
    tagline: 'Lorem ipsum',
    coverUrl: 'https://via.placeholder.com/400x200',
    logoUrl: 'https://via.placeholder.com/100',
    highlighted: true,
    tags: ['1'],
  },
  {
    name: 'First project',
    rowId: '1',
    lang: 'en',
    slug: 'first-project',
    tagline: 'Lorem ipsum',
    coverUrl: 'https://via.placeholder.com/400x200',
    logoUrl: 'https://via.placeholder.com/100',
    highlighted: true,
    tags: ['1'],
  },
  {
    name: 'Druhý projekt',
    rowId: '2',
    lang: 'cs',
    slug: 'druhy-projekt',
    tagline: 'Lorem ipsum',
    coverUrl: 'https://via.placeholder.com/400x200',
    logoUrl: 'https://via.placeholder.com/100',
    highlighted: false,
    tags: [],
  },
  {
    name: 'Second project',
    rowId: '2',
    lang: 'en',
    slug: 'second-project',
    tagline: 'Lorem ipsum',
    coverUrl: 'https://via.placeholder.com/400x200',
    logoUrl: 'https://via.placeholder.com/100',
    highlighted: false,
    tags: [],
  },
]
