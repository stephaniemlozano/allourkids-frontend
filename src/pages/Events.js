import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"


const Events = () => {
  const [item, setItem] = useState([])
  

  useEffect(() => {
    fetch('http://localhost:4001/')
    .then(response => response.json())
    .then(data => setItem(data))
    .catch(error => console.error(error))
  }, [])


  return (
    <div className="events">
      <h1>Future Events:</h1>
      {item.map((eachItem, keyIndex) => {
        return(
          <Link state={eachItem} to='/home'>
            <Card key={keyIndex} className="single-event">
              <Card.Img variant="top" src={eachItem.image}/>
              <Card.Body>
                <Card.Title>
                  <h2>{eachItem.eventname}</h2>
                </Card.Title>
                <Card.Text>
                  <h3>Date: {eachItem.date}, Time: {eachItem.time}</h3>
                  <h3>Address: {eachItem.address}</h3>
                  <br />
                  <h4>Donations Being Collected</h4>
                  <p>{eachItem.item1}</p>
                  <p>{eachItem.item2}</p>
                  <p>{eachItem.item3}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        )
      })}
    
    </div>
  )
}

export default Events