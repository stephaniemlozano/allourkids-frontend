import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const SingleEvent = () => {
  const [eventForm, setEventForm] = useState({})
  const location = useLocation()
  const navigate = useNavigate()

  const { image, eventname, date, time, address, item1, item2, item3 } =
    location.state

  const deleteEventBtn = (event) => {
    event.preventDefault()
    fetch(`${process.env.REACT_APP_API_ENDPOINT}?eventname=${eventname}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const { apiData } = data
        setEventForm(apiData)
      })
      .catch((error) => console.error(error))

    navigate('/admin')
  }

  const addEventForm = (event) => {
    setEventForm({ ...eventForm, [event.target.name]: event.target.value })
    console.log(event.target.name)
  }

  const updateEventBtn = (event) => {
    event.preventDefault()

    fetch(`${process.env.REACT_APP_API_ENDPOINT}?eventname=${eventname}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventForm),
    })
      .then((response) => response.json())
      .then((data) => setEventForm(data))
      .catch((error) => console.error(error))

    navigate('/admin')
  }
  return (
    <div className='admin'>
      <Card className='form'>
        <Card.Body>
          <Card.Title>
            <h1>Update an Event</h1>
          </Card.Title>
          <form className='add-form'>
            <label htmlFor=''>Image: </label>
            <input
              onChange={(event) => addEventForm(event)}
              type='text'
              placeholder='ex: image address'
              name='image'
              id='image'
            />
            <br />

            <label>Event Name: </label>
            <input
              onChange={(event) => addEventForm(event)}
              type='text'
              placeholder='ex: Golf Tournament'
              name='eventname'
              id='eventname'
            />
            <br />

            <label>Date: </label>
            <input
              onChange={(event) => addEventForm(event)}
              type='text'
              placeholder='ex: November 22, 2020'
              name='date'
              id='date'
            />
            <br />

            <label htmlFor=''>Time: </label>
            <input
              onChange={(event) => addEventForm(event)}
              type='text'
              placeholder='ex: 6:22 AM'
              name='time'
              id='time'
            />
            <br />

            <label htmlFor=''>Address: </label>
            <input
              onChange={(event) => addEventForm(event)}
              type='text'
              placeholder='ex: 8550 Ulmerton Rd'
              name='address'
              id='address'
            />
            <br />

            <label htmlFor=''>Item1: </label>
            <input
              onChange={(event) => addEventForm(event)}
              type='text'
              placeholder='ex: Luggage'
              name='item1'
              id='item1'
            />
            <br />

            <label htmlFor=''>Item2: </label>
            <input
              onChange={(event) => addEventForm(event)}
              type='text'
              placeholder='ex: Shoes'
              name='item2'
              id='item2'
            />
            <br />

            <label htmlFor=''>Item3: </label>
            <input
              onChange={(event) => addEventForm(event)}
              type='text'
              placeholder='ex: Hygiene Products'
              name='item3'
              id='item3'
            />
          <button onClick={updateEventBtn}>Update Event</button>
          </form>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Title>
            <h2>Event: {eventname}</h2>
            <h3>
              Date: {date} @ {time}
            </h3>
            <h4>Address: {address} </h4>
            <h4>
              Items: {item1}, {item2}, {item3}
            </h4>
            <img src={image} alt='' />
          </Card.Title>
          <button onClick={deleteEventBtn}>Delete Event</button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleEvent
