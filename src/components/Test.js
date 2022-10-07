import { Carousel } from 'react-bootstrap'
import imageC from '../images/volunteers.png'
import donatetoday from '../images/donatetoday.png'
import stat from '../images/stat.png'

const Test = () => {
  return (
    <Carousel className='carousel'>
      <Carousel.Item className='carousel-item'>
        <img
          className='d-block w-100'
          src={imageC}
          alt='volunteers sorting'
          width={300}
        />
        <Carousel.Caption className='carousel-caption'>
          <h4>Our WONDERFUL volunteers!</h4>
          <p>
            If you are interested in volunteering call 727-456-0600 and ask for
            Community Engagement.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carousel-item'>
        <img
          className='d-block w-100'
          src={donatetoday}
          alt='donate today'
          width={250}
          height={350}
        />
        <Carousel.Caption>
          <h4>Did you know?</h4>
          <p>
            May is National Abuse Prevention Month. Join the Manicure Movement
            and paint one nail blue to 'Polish Off Child Abuse'.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='carousel-item'>
        <img
          className='d-block w-100'
          src={stat}
          alt='statistics'
          width={350}
        />
        <Carousel.Caption>
          <h4>As of August 31st 2022</h4>
          <p>
            There are currently 21,335 children in Florida's foster care system.
            Your donations directly benefit these children within our community.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Test
