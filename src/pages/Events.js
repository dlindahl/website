import AppContainer from '../AppContainer'
import { Bit } from 'stemcell'
import Page from '../layouts/Page'
import React from 'react'

const head = {
  hero: 'https://farm4.staticflickr.com/3949/15589950511_3675b15e59_k.jpg',
  title: `Events`
}

const Join = (props) => (
  <AppContainer>
    <Page head={head}>
      <Bit>Events</Bit>
    </Page>
  </AppContainer>
)

export default Join
