import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


const Home = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT)
      .then(response => response.json())
      .then(data => {
        const {apiData} = data
        setItems(apiData)
      })
      .catch(error => console.error(error))
  }, [])

console.log(items)
  return (
    <div className='home-header'>
      <h1>Join the party and give back to your community!</h1>
      <br />
      <h2>Our Events</h2>
   
      <div className='home'>
        {  items.map((eachItem) => {
          return (
            <Link state={eachItem} to='/events' key={eachItem._id}>
              <Card className='single-event'>
                <Card.Img
                  className='home-image'
                  variant='top'
                  src={eachItem.image}
                />
                <Card.Body>
                  <Card.Title>
                    <h3>{eachItem.eventname}</h3>
                  </Card.Title>
                  <Card.Text>
                    <span>Date: {eachItem.date}</span>
                    <br />
                    <span>Time: {eachItem.time}</span>
                    <br />
                    <span>Address: {eachItem.address}</span>
                    <br />
                    <span>Donations Being Collected:</span>
                    <br />
                      <span>1. {eachItem.item1}</span>
                      <br />
                      <span>2. {eachItem.item2}</span>
                      <br />
                      <span>3. {eachItem.item3}</span>
                      <br />
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

export default Home


