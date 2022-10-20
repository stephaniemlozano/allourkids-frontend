import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Events = () => {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [counter3, setCounter3] = useState(0)

  const location = useLocation({})
  const { image, eventname, item1, item2, item3 } = location.state

  let value1 = (counter1 + 1)
  let value2 = (counter2 + 1)
  let value3 = (counter3 + 1)

  let doughnutData = {
    labels: [item1, item2, item3],
    datasets: [
      {
        label: 'Total Items Donated',
        data: [counter1, counter2, counter3],
        backgroundColor: [
          '#f3a712',
          '#29335c',
          '#db2b39',
        ],
        borderColor: [
          '#f3a712',
          '#29335c',
          '#db2b39',
        ],
        borderWidth: 1,
      }
    ]
  } 

  console.log(`Items donated: ${item1} - ${counter1}, ${item2} - ${counter2}, ${item3} - ${counter3}`)

  return (
    <Container className='event-item'>
        <Row className='barchart'>
          <Col xs={6}>
            <Col xs={6}>YOUR Donations At Work</Col>
            <Doughnut xs={6}
              data={doughnutData}
              options={doughnutData.options}
            />
          </Col>
      </Row>
      <Row className='counter'>
        <div xs={6}>
          <h2>Every Donation Counts!</h2>
            <h3>Your donation goes directly to a foster child </h3>
            <h3> in Pinellas and Pasco counties.</h3> 
          <h2>THANK YOU for your support of:</h2>
          <h3>{eventname}</h3>
          <img src={image} alt="event" width={300} />

          <h3>Today I donated...</h3>
          <button id='b1' onClick={() => setCounter1(value1)}>{item1}</button>
          <button id='b2' onClick={() => setCounter2(value2)}>{item2}</button>
          <button id='b3' onClick={() => setCounter3(value3)}>{item3}</button>
        </div>
        <Link state={location.state} to='/admin' className='link'>...</Link>
      </Row>
    </Container>
  )
}

export default Events
