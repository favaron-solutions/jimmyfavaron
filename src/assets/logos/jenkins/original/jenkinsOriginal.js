import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './jenkins.svg'

/** JenkinsOriginal */
function JenkinsOriginal({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'JenkinsOriginal' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

JenkinsOriginal.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default JenkinsOriginal
