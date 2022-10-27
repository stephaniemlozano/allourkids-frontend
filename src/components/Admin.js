import { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Admin = () => {
  const [eventForm, setEventForm] = useState({})
  const navigate = useNavigate()
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

  const addEventBtn = (event) => {
    event.preventDefault()

    fetch(process.env.REACT_APP_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventForm),
    })
      .then((response) => response.json())
      .then((data) => {
        const { apiData } = data
        setEventForm(apiData)
        window.location.reload()
      })
      .catch((error) => console.error(error))
  }

  const handleLogOut = () => {
    localStorage.clear()
    navigate('/')
  }

  console.log('this is event form', eventForm)

  return (
    <div className='admin'>
      <div className='logout-btn'>
        <button onClick={handleLogOut}>Log Out</button>
      </div>
      <br />
      <Card className='form'>
        <Card.Body>
          <Card.Title>
            <h1>Add an Event</h1>
          </Card.Title>
          <form className='add-form'>
            <label htmlFor=''>Image: </label>
            <input
              onChange={(event) => addEventForm(event)}
              type='text'
              data-date-format='DD MM YYYY'
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
            <br />

            <button onClick={addEventBtn}>Add Event</button>
          </form>
        </Card.Body>
      </Card>

      <h1>Select Event To Update/Delete</h1>
      <div className='home'>
        {items.map((eachItem) => {
          return (
            <Link state={eachItem} to='/single-event' key={eachItem._id}>
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
      </div>
    </div>
  )
}

export default Admin
