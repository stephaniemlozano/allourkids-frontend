import BarChart from 'react-easy-bar-chart'
import { Container, Row, Col, TabContainer } from 'react-bootstrap'
import { useState } from 'react'
import { useLocation} from 'react-router-dom'

const Events = () => {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [counter3, setCounter3] = useState(0)

  const location = useLocation({})
  const { image, eventname, item1, item2, item3 } = location.state

  let value1 = (counter1 + 1)
  const barData = [
    {
      title: item1,
      value: value1,
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
    <Container className='event-item'>
        <Row className='barchart'>
          <Col xs={6}>
            <Col xs={6}>YOUR Donations At Work</Col>
            <BarChart xs={6}
              xAxis = 'Items Needed'
              yAxis = 'Amount Donated'
              height={400}
              width={800}
              data={barData}
            />
          </Col>
      </Row>
      <Row className='counter'>
        <div xs={6}>
          <h2>Every Donation Counts!</h2>
            <h3>Your donation goes directly to a foster child </h3>
            <h3> in Pinellas and Pasco counties.</h3> 
          <h2>THANK YOU for your support of:</h2>
          <h2>{eventname}</h2>
          <img src={image} alt="event" width={300} />

          <h3>Today I donated...</h3>
          <button id='b1' onClick={() => setCounter1(barData[0].value)}>{item1}</button>
          <button id='b2' onClick={() => setCounter2(counter2 + 1)}>{item2}</button>
          <button id='b3' onClick={() => setCounter3(counter3 + 1)}>{item3}</button>
        </div>
      </Row>
    </Container>
  )
}

export default Events