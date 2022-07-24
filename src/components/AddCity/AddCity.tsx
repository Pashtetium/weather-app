import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { message } from 'antd'

import { searchCity } from 'api'

function AddCity({ onSearchChange }: any) {
  const [searchValue, setSearchValue] = useState(null)

  const loadOptions = (inputValue: string) => searchCity(inputValue)
    .then((response) => response.json())
    .catch((err) => { message.error(err.message) })
    .then((response) => ({
      options: response.data.map((city: any) => ({
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`,
      })),
    }))

  const handleOnChange = (searchData:any) => {
    setSearchValue(searchData)
    onSearchChange(searchData)
  }

  return (
    <AsyncPaginate
      debounceTimeout={600}
      loadOptions={loadOptions}
      placeholder="Search for city"
      value={searchValue}
      onChange={handleOnChange}
    />
  )
}

export default AddCity
