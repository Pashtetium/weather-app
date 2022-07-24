import React, { useState } from 'react'
import {
  Space, Button, Typography, Modal, message,
} from 'antd'

import { AddCity, CityList } from 'components'
import { fetchCurrentWeather } from 'api'

const { Title } = Typography

function MainPage() {
  const [isModalVisible, setModalVisible] = useState(false)
  const [cities, setCities]: any = useState([])

  const handleOnSearchChange = (searchData: any) => {
    const [lat, lon] = searchData.value.split(' ')

    fetchCurrentWeather(lat, lon)
      .then(async (response: any) => {
        const weatherResponse = await response.json()

        setCities([...cities, { city: searchData.label, ...weatherResponse }])
      })
      .catch((err) => { message.error(err.message) })
      .finally(() => { setModalVisible(false) })
  }

  return (
    <Space>
      <Title level={2}>Cities</Title>
      <Button type="primary" onClick={() => { setModalVisible(true) }}>Add City</Button>
      <CityList data={cities} />
      <Modal footer={null} title="Add City" visible={isModalVisible} onCancel={() => setModalVisible(false)}>
        <AddCity onSearchChange={handleOnSearchChange} />
      </Modal>
    </Space>
  )
}

export default MainPage
