import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Events = () => {
  const [item, setItem] = useState([])

  useEffect(() => {
    fetch('http://localhost:4001/')
      .then((response) => response.json())
      .then((data) => setItem(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className='event-header'>
      <h1>Future Events:</h1>
      <div className='events'>
        {item.map((eachItem, keyIndex) => {
          return (
            <Link state={eachItem} to='/home'>
              <Card key={keyIndex} className='single-event'>
                <Card.Img
                  className='event-image'
                  variant='top'
                  src={eachItem.image}
                />
                <Card.Body>
                  <Card.Title>
                    <h3>{eachItem.eventname}</h3>
                  </Card.Title>
                  <Card.Text>
                    <h4>Date: {eachItem.date}</h4>
                    <h4>Time: {eachItem.time}</h4>
                    <h4>Address: {eachItem.address}</h4>
                    <br />
                    <h4>Donations Being Collected:</h4>
                      <p>1. {eachItem.item1}</p>
                      <p>2. {eachItem.item2}</p>
                      <p>3. {eachItem.item3}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Events
