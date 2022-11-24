import {defineScope} from '@sanity/ui-workshop'
import {lazy} from 'react'

export default defineScope({
  name: 'primitives/heading',
  title: 'Heading',
  stories: [
    {
      name: 'plain',
      title: 'Plain',
      component: lazy(() => import('./plain')),
    },
    {
      name: 'optical-alignment',
      title: 'Optical alignment',
      component: lazy(() => import('./opticalAlignment')),
    },
  ],
})
