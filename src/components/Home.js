import BarChart from 'react-easy-bar-chart'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [counter3, setCounter3] = useState(0)

  const location = useLocation({})
  const { item1, item2, item3 } = location.state

  const barData = [
    {
      title: item1,
      value: 27,
      color: '#6dd3ce'
    },
    {
      title: item2,
      value: 15,
      color: '#c8e9a0'
    },
    {
      title: item3,
      value: 35,
      color: '#ef5b5b'
    }
  ]

  useEffect(() => {
    console.log(`Items donated: item 1 - ${counter1}, item 2 - ${counter2}, item 3 - ${counter3}`)
  })

  return (
    <div className='home-item'>
        <div>
        <h1>Live Count of Items Donated</h1>
        <BarChart 
          xAxis = 'Items Needed'
          yAxis = 'Amount Donated'
          height={400}
          width={800}
          data={barData}
        />
      </div>
      <div>
          <h2>Every Donation Counts!</h2>
          <h3>Your donation goes directly to a foster child in Pinellas and Pasco coutnies. THANK YOU for your support!</h3>
          <br />
          <h3>Today I donated...</h3>
          <button onClick={() => setCounter1(counter1 + 1)}>{item1}</button>
          <button onClick={() => setCounter2(counter2 + 1)}>{item2}</button>
          <button onClick={() => setCounter3(counter3 + 1)}>{item3}</button>
      </div>
    </div>

    
  )
}

export default Home
