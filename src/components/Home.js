import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Home = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        const { apiData } = data
        setItems(apiData)
      })
      .catch((error) => console.error(error))
  }, [])

  console.log(items)
  return (
    <div className='home-header'>
      <img
        className='header-img'
        src='https://stephanie-buckette.s3.amazonaws.com/hero-image-2.webp'
        alt='kids playing'
        width={650}
      />
      <h1>Our Events</h1>
      <div className='home'>
        {items.map((eachItem) => {
          return (
            <Link state={eachItem} to='/events' key={eachItem._id}>
              <Card className='single-event'>
                <Card.Img
                  className='home-image'
                  variant='top'
                  src={eachItem.image}
                />
                <Card.Body>
                  <Card.Title className='title'>
                    <h4>{eachItem.eventname}</h4>
                  </Card.Title>
                  <Card.Text>
                    <span className=''>Donations Being Collected:</span>
                    <br />
                    <ul>
                      <li>{eachItem.item1}</li>
                      <li>{eachItem.item2}</li>
                      <li>{eachItem.item3}</li>
                    </ul>
                  </Card.Text>
                  <Card.Text className='event-detail'>
                    <span>{eachItem.date} at</span>
                    <span> {eachItem.time}</span>
                    <br />
                    <span>{eachItem.address}</span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          )
        })}
        <h1>Join the party and give back to your community!</h1>
      </div>
    </div>
  )
}

export default Home
