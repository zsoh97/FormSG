import { Button } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'

import { BxsHelpCircle } from '~assets/icons/BxsHelpCircle'
import {
  getMobileViewParameters,
  getTabletViewParameters,
} from '~utils/storybook'

import { PublicHeader, PublicHeaderProps } from './PublicHeader'

const DEFAULT_ARGS: PublicHeaderProps = {
  ctaElement: (
    <Button variant="solid" colorScheme="primary">
      Log in
    </Button>
  ),
  publicHeaderLinks: [
    {
      label: 'Products',
      href: '',
    },
    {
      label: 'Help',
      href: 'https://guide.form.gov.sg',
      showOnMobile: true,
      MobileIcon: BxsHelpCircle,
    },
  ],
}

export default {
  title: 'Templates/PublicHeader',
  component: PublicHeader,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [],
  args: DEFAULT_ARGS,
} as Meta

const Template: Story<PublicHeaderProps> = (args) => <PublicHeader {...args} />
export const Default = Template.bind({})

export const WithoutCTA = Template.bind({})
WithoutCTA.args = {
  ...DEFAULT_ARGS,
  ctaElement: undefined,
}

export const Mobile = Template.bind({})
Mobile.parameters = getMobileViewParameters()

export const Tablet = Template.bind({})
Tablet.parameters = getTabletViewParameters()
