import React, { useState } from 'react'
import {
  Card, Button, Typography, Space,
} from 'antd'

const { Text } = Typography

function CityCard({ data }:any) {
  const {
    city, weather, main, wind,
  } = data

  const [isExtraVisible, setExtraVisible] = useState(false)

  const extraInfo = (
    <Space direction="vertical">
      {Object.entries(main)
        .map((info) => (<Text>{`${info[0]}: ${info[1]}`}</Text>))}
    </Space>
  )

  return (
    <Card
      actions={[
        <Button type="link" onClick={() => { setExtraVisible(!isExtraVisible) }}>More</Button>,
        <Button danger type="link">Delete</Button>,
      ]}
      title={city}
    >
      <Space direction="vertical">
        <Text>{weather[0].description}</Text>
        <Text>
          {`Wind speed: ${wind.speed}`}
        </Text>
        {isExtraVisible && extraInfo}
      </Space>
    </Card>
  )
}

export default CityCard
