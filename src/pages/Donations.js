import imageD from '../images/donatetoday.png'

const Donations = () => {
  return (
    <div>
      <img src={imageD} alt="donate today" width={300} />
      <h1>Donation Guidelines</h1>
      <p>We can only accept new items with the exception of clothing. Clothing can be new or gently used/like new. All other items must be new.</p>
      <p>We accept sizes from preemie to teen/adult 4x. Items with holes, stains, fading, past events that they did not attend cannot be accepted. As well as handmade clothing, used toys, used school supplies and open hygiene products.</p>
      <h2>Items We Need</h2>
      <ul>
        <li>Tops</li>
        <li>Basic T-Shirts</li>
        <li>Bottoms</li>
        <li>Athletic Shorts</li>
        <li>Shorts</li>
        <li>Jeans</li>
        <li>Sweaters/Jackets</li>
        <li>Pajamas</li>
        <li>Socks</li>
        <li>Underwear</li>
        <li>Bras</li>
        <li>Sneakers</li>
        <br />
        <li>Baby Wipes</li>
        <li>Diapers</li>
        <li>Pull Up Diapers</li>
        <li>Baby Shampoo</li>
        <li>Baby Oil</li>
        <li>Lotion</li>
        <li>Diaper Cream</li>
        <li>Men 2 in 1 Shampoo</li>
        <li>Kids 2 in 1 Shampoo</li>
        <li>Deoderant</li>
        <li>Shampoo/Conditioner</li>
        <li>Textured Hair Care</li>
        <li>Body Wash</li>
        <li>Loofahs</li>
        <li>Wash Cloths</li>
        <li>Bath Towels</li>
        <br />
        <li>Backpacks</li>
        <li>Binders</li>
        <li>Calculators</li>
        <li>Lunch Boxes</li>
        <li>Duffle Bags</li>
        <li>Toys</li>
        <li>Bikes</li>
        <li>New/Like New Furniture</li>
      </ul>
      <h2>Drop Off Locations</h2>
        <div className="location">
          <p>Largo Office</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.320833005393!2d-82.75974078506485!3d27.8921261827157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2fae9f2980403%3A0xc1d54403e703799f!2s8550%20Ulmerton%20Rd%2C%20Largo%2C%20FL%2033771!5e0!3m2!1sen!2sus!4v1664681298571!5m2!1sen!2sus" title="Largo Office" width={300} height={200} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="location">
          <p>Trinity Office</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.584812060164!2d-82.68746507943106!3d28.18953963507421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c293d0e2fc3ff7%3A0x2912abffcc725758!2s7916%20Evolutions%20Way%2C%20Trinity%2C%20FL%2034655!5e0!3m2!1sen!2sus!4v1664681657624!5m2!1sen!2sus" title="Triity Office" width={300} height={200} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="location">
          <p>Dade City Office</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.2332350843712!2d-82.21136078505413!3d28.35179738252935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd5356a9306a03%3A0x9e8486430cf132f6!2s36739%20State%20Rd%2052%2C%20Dade%20City%2C%20FL%2033525!5e0!3m2!1sen!2sus!4v1664681717955!5m2!1sen!2sus" title="DC Office" width={300} height={200} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Donations