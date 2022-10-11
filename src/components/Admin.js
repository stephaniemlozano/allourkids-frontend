import { useState } from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
  const [eventForm, setEventForm] = useState({})
  const navigate = useNavigate()

  const addEventForm = (event) => {
    setEventForm({ ...eventForm, [event.target.name]: event.target.value })
    console.log(event.target.name)
  }

  const addEventBtn = (event) => {
    event.preventDefault()
    fetch(process.env.REACT_APP_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventForm),
    })
    .then(response => response.json)
    .then(data => setEventForm(data))
    .catch(error => console.error)

    navigate('/')
  }

  // 2. create form to delete event by ID

  // 3. create form to update event by ID

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>
            <h1>Add an Event</h1>
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

            <label htmlFor=''>Event Name: </label>
            <input
              onChange={(event) => addEventForm(event)}
              type='text'
              placeholder='ex: Golf Tournament'
              name='eventname'
              id='eventname'
            />
            <br />

            <label htmlFor=''>Date: </label>
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
            <br />

            <button onClick={addEventBtn}>Add Event</button>
          </form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Admin