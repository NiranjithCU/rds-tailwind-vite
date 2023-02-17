import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '../components/Card/Card'

const meta = {
  title: 'Example/Card',
  component: Card,
  tags: ['docsPage'],
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    content: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Card>
export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {
  args: {
    title: 'Card Title',
    content: 'This is a card',
  },
}
