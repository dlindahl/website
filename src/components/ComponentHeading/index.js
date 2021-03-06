import { array, object, oneOf, oneOfType } from 'prop-types'
import { Bit, Heading, Rule } from 'stemcell'
import React from 'react'

const style = {
  root: {
    display: 'flex',
    flexDirection: 'row'
  },
  rootAlignment: {
    center: {
      justifyContent: 'center'
    },
    left: {
      justifyContent: 'flex-start'
    }
  },
  rule: {
    backgroundColor: 'var(--colorRule)'
  },
  text: {
    color: 'var(--colorAccent)',
    fontFamily: 'var(--fontAccent)',
    textAlign: 'center',
    textTransform: 'uppercase'
  }
}

const ComponentHeading = ({ align, css, ...props }) => {
  let leftRule
  const rightRule = <Rule css={style.rule} marginLeft={1} width={2}/>
  if (align === 'center') {
    leftRule = <Rule css={style.rule} marginRight={1} width={2}/>
  }
  return (
    <Bit css={[style.root, style.rootAlignment[align]]}>
      {leftRule}
      <Heading css={[style.text, css]} inline={false} level={4} {...props}/>
      {rightRule}
    </Bit>
  )
}

ComponentHeading.defaultProps = {
  align: 'center'
}

ComponentHeading.propTypes = {
  align: oneOf(['center', 'left']),
  css: oneOfType([array, object])
}

export default ComponentHeading
