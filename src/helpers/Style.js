const opacity = 0.6
const DEFAULT = {
  FILTER: 'grayscale(0.7)',
  COLOR: `rgba(255, 255, 255, ${opacity})`
}
const COLD = {
  FILTER: 'hue-rotate(60deg) saturate(30%) contrast(90%)',
  COLOR: `rgba(0, 255, 255, ${opacity})`
}
const HOT = {
  FILTER: 'hue-rotate(250deg) saturate(100%)',
  COLOR:`rgba(255, 0, 0, ${opacity})`
}
const NORMAL = {
  FILTER: 'sepia(100%) saturate(150%)',
  COLOR: `rgba(255, 255, 0, ${opacity})`
}

const filters = (filter) => {
  return {
    transition: 'filter 0.5s ease-in-out',
    webkitFilter: filter,
    mozFilter: filter,
    oFilter: filter,
    msFilter: filter,
    filter: filter,
  }
}

const defineTemp = (temp) => {
  if ( !temp ) {
    return DEFAULT
  } else if ( temp >= 35) {
    return HOT
  } else if( temp <= 15 ) {
    return COLD
  } else {
    return NORMAL
  }
}

const imageFilter = (temp) => {

  let climateStyle = defineTemp(temp)

  return {
    ...filters(climateStyle.FILTER),
  }
}

const backgroundColorTemp = (temp) => {
  let climateStyle = defineTemp(temp)

  return {
    background: `${climateStyle.COLOR}`,
  }
}

const backgroundCustom = () => {
  return {
    backgroundColor: `rgba(255, 255, 255, ${opacity})`,
  }
}

const homeBackground = (imageUrl) => {
  return {
    background: 'no-repeat',
    backgroundImage: `url('${imageUrl}')`,
    position: 'fixed',
    left: '0',
    right: '0',
    zIndex: '1',
    display: 'block',
    width: '100vw',
    height: '100vh',
  }
}

export default { imageFilter, backgroundCustom, homeBackground, backgroundColorTemp}
