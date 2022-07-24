export const fetchCurrentWeather = (lat: any, lon: any) => fetch(
  // eslint-disable-next-line max-len
  `${process.env.REACT_APP_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
)

export const searchCity = (inputValue: any) => {
  const geoApiOptions: any = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_XRapidAPI_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_XRapidAPI_HOST,
    },
  }

  return fetch(
    `${process.env.REACT_APP_GEO_API_URL}/cities?namePrefix=${inputValue}`,
    geoApiOptions,
  )
}
