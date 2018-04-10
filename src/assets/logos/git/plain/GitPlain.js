import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './GitPlain.svg'

/** GitPlain */
function GitPlain({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'GitPlain' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

GitPlain.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default GitPlain
