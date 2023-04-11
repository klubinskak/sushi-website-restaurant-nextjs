import React from 'react'
import {LayoutProps, useCurrentUser} from 'sanity/lib/exports';
import {GetStartedTutorial} from './GetStartedTutorial'

export function CustomDefaultLayout(props: LayoutProps) {
  const user = useCurrentUser()

  const showTutorial = Boolean(user?.roles?.length)

  return (
    <>
      {showTutorial && <GetStartedTutorial />}
      {props.renderDefault(props)}
    </>
  )
}
