import React, { useState } from 'react'
import { message, Spin } from 'antd'
import { fetchCities } from 'api'

import { CityCard } from 'components'

function CityList() {
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(false)

  const getCities = () => {
    setLoading(true)

    fetchCities()
      .then((data: any) => {
        setCities(data)
      })
      .catch((error: any) => { message.error(error.message) })
      .finally(() => { setLoading(false) })
  }

  return loading ? <Spin spinning /> : cities.map((city: any) => <CityCard city={city} />)
}
