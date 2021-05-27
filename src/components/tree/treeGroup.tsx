import React from 'react'
import {Stack} from '../../primitives'
import {useTree} from './useTree'

export interface TreeGroupProps {
  expanded?: boolean
}

export function TreeGroup(
  props: TreeGroupProps &
    Omit<React.HTMLProps<HTMLDivElement>, 'as' | 'height' | 'ref' | 'role' | 'wrap'>
) {
  const {children, expanded = false, ...restProps} = props
  const tree = useTree()

  return (
    <Stack
      as="ul"
      data-ui="TreeGroup"
      {...restProps}
      hidden={!expanded}
      marginTop={tree.space}
      role="group"
      space={tree.space}
    >
      {children}
    </Stack>
  )
}
