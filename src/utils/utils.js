//Utils to reuse code

export const getStreet = (location) => {
  let fullStreetName = ' '

  if (location.street) {
    fullStreetName += location.street + ' '
  }
  if (location.houseNumber) {
    fullStreetName += location.houseNumber + ' '
  }
  if (location.houseNumberAddition) {
    fullStreetName += location.houseNumberAddition + ' '
  }

  return fullStreetName
}

export const getZipAnCity = (location) => {
  let zipAndCity = ' '

  if (location.zip) {
    zipAndCity += location.zip + ' '
  }

  if (location.city) {
    zipAndCity += location.city + ' '
  }

  return zipAndCity
}

export const getPriceTag = (price) => {
  let val = (price / 1).toFixed(2).replace('.', ',')
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
