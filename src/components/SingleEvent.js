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
        window.location.reload()
      })
      .catch((error) => console.error(error))
      
      navigate('/admin')
  }

  const addEventForm = (event) => {
    if (event.target.name === 'date') {
      const formatDate = event.target.value.split('-')
      const year = formatDate[0]
      const month = formatDate[1]
      const day = formatDate[2]
      const fullDate = month + '/' + day + '/' + year

      setEventForm({ ...eventForm, [event.target.name]: fullDate })
    } else {
      setEventForm({ ...eventForm, [event.target.name]: event.target.value })
    }
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
      .then((data) => {
        setEventForm(data)
        window.location.reload()
      })
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
              type='date'
              placeholder='ex: 11/22/2022'
              name='date'
              id='date'
            />
            <br />

            <label>Time: </label>
            <select
              name='time'
              id='time'
              onChange={(event) => addEventForm(event)}
              type='time'
              placeholder='ex: 6:22 AM'
            >
              <option value='8:00 AM'>8:00 AM</option>
              <option value='9:00 AM'>9:00 AM</option>
              <option value='10:00 AM'>10:00 AM</option>
              <option value='11:00 AM'>11:00 AM</option>
              <option value='12:00 PM'>12:00 PM</option>
              <option value='1:00 PM'>1:00 PM</option>
              <option value='2:00 PM'>2:00 PM</option>
              <option value='3:00 PM'>3:00 PM</option>
              <option value='4:00 PM'>4:00 PM</option>
              <option value='5:00 PM'>5:00 PM</option>
              <option value='6:00 PM'>6:00 PM</option>
              <option value='7:00 PM'>7:00 PM</option>
              <option value='8:00 PM'>8:00 PM</option>
            </select>
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
