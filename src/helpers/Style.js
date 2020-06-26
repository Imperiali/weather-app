const opacity = 0.6

function imageFilter(temp) {
  const DEFAULT = {
    FILTER: 'grayscale(0.7)',
    COLOR: `rgba(255, 255, 255, ${opacity})`
  }
  const COLD = {
    FILTER: 'hue-rotate(110deg) saturate(50%)',
    COLOR: `rgba(0, 255, 255, ${opacity})`
  }
  const HOT = {
    FILTER: 'hue-rotate(250deg) saturate(100%)',
    COLOR:`rgba(255, 0, 0, ${opacity})`
  }
  const NORMAL = {
    FILTER: 'hue-rotate(360deg) saturate(284%)',
    COLOR: `rgba(255, 255, 0, ${opacity})`
  }

  let climateStyle
  if ( !temp ) {
    climateStyle = DEFAULT
  } else if ( temp >= 35) {
    climateStyle = HOT
  } else if( temp <= 15 ) {
    climateStyle = COLD
  } else {
    climateStyle = NORMAL
  }

  return {
    webkitFilter: `${climateStyle.FILTER}`,
    mozFilter: `${climateStyle.FILTER}`,
    oFilter: `${climateStyle.FILTER}`,
    msFilter: `${climateStyle.FILTER}`,
    filter: `${climateStyle.FILTER}`,
    background: `${climateStyle.COLOR}`
  }
}

function backgroundCustom() {
  return {
    backgroundColor: `rgba(255, 255, 255, ${opacity})`,
  }
}

export default { imageFilter, backgroundCustom }