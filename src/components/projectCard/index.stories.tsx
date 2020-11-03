import React, { ComponentProps } from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react'

import ProjectCard from '.'

const story: Meta = {
  title: 'ProjectCard',
  component: ProjectCard,
  argTypes: {
    title: {
      defaultValue: 'Project name',
      control: 'text',
    },
    description: {
      defaultValue:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      control: 'text',
    },
    cover: {
      defaultValue: 'https://via.placeholder.com/400x200',
      control: 'text',
    },
    logo: {
      defaultValue: 'https://via.placeholder.com/100',
      control: 'text',
    },
    link: {
      defaultValue: '#',
      control: 'text',
    },
    tags: {
      defaultValue: ['#javascript'],
      control: 'array',
    },
  },
}

const Template: Story<ComponentProps<typeof ProjectCard>> = (args) => (
  <ProjectCard {...args} />
)

export const Default = Template.bind({})

export default story
