import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './terraform.svg'

/** TerraformOriginal */
function TerraformOriginal({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'TerraformOriginal' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

TerraformOriginal.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default TerraformOriginal
