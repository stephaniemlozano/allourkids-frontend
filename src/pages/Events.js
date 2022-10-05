import BarChart from 'react-easy-bar-chart'
import { useState } from 'react'
import { useLocation} from 'react-router-dom'

const Events = () => {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [counter3, setCounter3] = useState(0)

  const location = useLocation({})
  const { image, eventname, item1, item2, item3 } = location.state

  const barData = [
    {
      title: item1,
      value: 12,
      color: '#f3a712'
    },
    {
      title: item2,
      value: 35,
      color: '#29335c'
    },
    {
      title: item3,
      value: 20,
      color: '#db2b39'
    }
  ]

    console.log(`Items donated: ${item1} - ${counter1}, ${item2} - ${counter2}, ${item3} - ${counter3}`)


  return (
    <div className='home-item'>
        <div className='barchart'>
        <h1>YOUR Donations At Work</h1>
        <BarChart 
          xAxis = 'Items Needed'
          yAxis = 'Amount Donated'
          height={400}
          width={800}
          data={barData}
        />
      </div>
      <div className='counter'>
          <h2>Every Donation Counts!</h2>
            <h3>Your donation goes directly to a foster child </h3>
            <h3> in Pinellas and Pasco counties.</h3> 
          <h2>THANK YOU for your support of:</h2>
          <h2>{eventname}</h2>
          <img src={image} alt="event" width={300} />

          <h3>Today I donated...</h3>
          <button onClick={() => setCounter1(counter1 + 1)}>{item1}</button>
          <button onClick={() => setCounter2(counter2 + 1)}>{item2}</button>
          <button onClick={() => setCounter3(counter3 + 1)}>{item3}</button>
      </div>
    </div>
  )
}

export default Events