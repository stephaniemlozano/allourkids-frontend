import { Card } from 'react-bootstrap'
import imageD from '../images/donatetoday.png'

const Donations = () => {
  return (
    <div className='donations'>
      <h1>Donation Guidelines</h1>
      <div className='donation-header'>
        <img src={imageD} alt='donate today' width={300} />
        <p>
          1. We can only accept new items with the exception of clothing.
          <br />
          2. Clothing can be new or gently used/like new. All other items must
          be new.
          <br />
          3. We accept sizes from preemie to teen/adult 4x.
          <br />
          4. Items with holes, stains, fading, past events that they did not
          attend cannot be accepted. As well as handmade clothing, used toys,
          used school supplies and open hygiene products.
        </p>
      </div>
      <h2>Items We Need</h2>
      <div className='donation-list'>
        <Card className='list-card'>
          <Card.Body>
            <Card.Title className='title'>
              <h3>Clothing Items</h3>
            </Card.Title>
            <Card.Text>
              <h4>Tops</h4>
              <h4>Basic T-Shirts</h4>
              <h4>Bottoms</h4>
              <h4>Athletic Shorts</h4>
              <h4>Shorts</h4>
              <h4>Jeans</h4>
              <h4>Sweaters/Jackets</h4>
              <h4>Pajamas</h4>
              <h4>Socks</h4>
              <h4>Underwear</h4>
              <h4>Bras</h4>
              <h4>Sneakers</h4>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='list-card'>
          <Card.Body>
            <Card.Title className='title'>
              <h3>Baby Items</h3>
            </Card.Title>
            <Card.Text>
              <h4>Baby Wipes</h4>
              <h4>Diapers</h4>
              <h4>Pull Up Diapers</h4>
              <h4>Baby Shampoo</h4>
              <h4>Baby Oil</h4>
              <h4>Lotion</h4>
              <h4>Diaper Cream</h4>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='list-card'>
          <Card.Body>
            <Card.Title className='title'>
              <h3>Hygiene Products</h3>
            </Card.Title>
            <Card.Text>
              <h4>Men 2 in 1 Shampoo</h4>
              <h4>Kids 2 in 1 Shampoo</h4>
              <h4>Deoderant</h4>
              <h4>Shampoo/Conditioner</h4>
              <h4>Textured Hair Care</h4>
              <h4>Body Wash</h4>
              <h4>Loofahs</h4>
              <h4>Wash Cloths</h4>
              <h4>Bath Towels</h4>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='list-card'>
          <Card.Body>
            <Card.Title className='title'>
              <h3>School Supplies/Other</h3>
            </Card.Title>
            <Card.Text>
              <h4>Backpacks</h4>
              <h4>Binders</h4>
              <h4>Calculators</h4>
              <h4>Lunch Boxes</h4>
              <h4>Duffle Bags</h4>
              <h4>Toys</h4>
              <h4>Bikes</h4>
              <h4>New/Like New Furniture</h4>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <h2>Drop Off Locations</h2>
      <div className='location'>
        <div className='office'>
          <p>Largo Office</p>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.320833005393!2d-82.75974078506485!3d27.8921261827157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2fae9f2980403%3A0xc1d54403e703799f!2s8550%20Ulmerton%20Rd%2C%20Largo%2C%20FL%2033771!5e0!3m2!1sen!2sus!4v1664681298571!5m2!1sen!2sus'
            title='Largo Office'
            width={300}
            height={200}
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
        <div className='office'>
          <p>Trinity Office</p>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.584812060164!2d-82.68746507943106!3d28.18953963507421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c293d0e2fc3ff7%3A0x2912abffcc725758!2s7916%20Evolutions%20Way%2C%20Trinity%2C%20FL%2034655!5e0!3m2!1sen!2sus!4v1664681657624!5m2!1sen!2sus'
            title='Triity Office'
            width={300}
            height={200}
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
        <div className='office'>
          <p>Dade City Office</p>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.2332350843712!2d-82.21136078505413!3d28.35179738252935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd5356a9306a03%3A0x9e8486430cf132f6!2s36739%20State%20Rd%2052%2C%20Dade%20City%2C%20FL%2033525!5e0!3m2!1sen!2sus!4v1664681717955!5m2!1sen!2sus'
            title='DC Office'
            width={300}
            height={200}
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Donations
