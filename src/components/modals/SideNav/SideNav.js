import React, { Component } from 'react'

import * as S from './styles'
import { SideNav } from 'app/components'

export default class SideNavModal extends Component {
  render () {
    return (
      <S.SideNavModalComponent>
        <SideNav options={{ mobile: true }} />
      </S.SideNavModalComponent>
    )
  }
}
