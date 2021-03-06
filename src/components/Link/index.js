import Anchor from './Anchor'
import { array, bool, func, node, object, oneOfType, string } from 'prop-types'
import React from 'react'
import RouterLink from './RouterLink'

const isExternalLink = (to) => to && to.includes('://')

const style = {
  outline: {
    ':hover': {
      backgroundColor: 'var(--colorLink)',
      borderColor: 'var(--colorLink)',
      color: 'var(--colorBackground)'
    },
    borderColor: 'var(--colorLink)',
    fontFamily: 'var(--fontAccent)',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  root: {
    color: 'var(--colorLink)',
    textDecoration: 'none',
    transition: '0.4s all'
  }
}

const Link = ({ children, css, outline, size, ...props }) => {
  let LinkComponent = RouterLink
  if (isExternalLink(props.to)) {
    LinkComponent = Anchor
  }
  const linkCss = [style.root]
  let linkProps = {
    size
  }
  if (outline) {
    linkCss.push(style.outline)
    linkProps = {
      ...linkProps,
      borderWidth: 1,
      marginTop: 1,
      padding: 1,
      size: size || 'longPrimer'
    }
  }
  return (
    <LinkComponent {...linkProps} css={[linkCss, css]} {...props}>
      {children}
    </LinkComponent>
  )
}

Link.propTypes = {
  children: node,
  color: string,
  css: oneOfType([array, object]),
  outline: bool,
  size: string,
  style: func,
  to: string
}

export default Link
