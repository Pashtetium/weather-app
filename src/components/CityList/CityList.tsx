import React from 'react'
// import { message, Spin } from 'antd'

import { CityCard } from 'components'

function CityList({ data }:any) {
  // const [cities, setCities] = useState([])
  // const [loading, setLoading] = useState(false)
  console.log(data)

  return data?.map((city: any) => {
    console.log(city)

    return <CityCard key={city.id} data={city} />
  })
}

export default CityList
