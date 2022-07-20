import React, { useState } from 'react'
import {
  Space, Button, Typography, Empty,
} from 'antd'

import { CityList } from 'components'

const { Title } = Typography

function MainPage({ }) {
  return (
    <Space>
      <Title level={2}>Cities</Title>
      <Button>Add</Button>
      {cities
        ? <CityList cities={cities} />
        : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
    </Space>
  )
}
