import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './GithubOriginalWordmark.svg'

/** GithubOriginalWordmark */
function GithubOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'GithubOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

GithubOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default GithubOriginalWordmark
