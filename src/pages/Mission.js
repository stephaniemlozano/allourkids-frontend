import imageA from '../images/sorting.png'
import imageB from '../images/donations.png'
import fb from '../images/fb.png'
import instgram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'

const Mission = () => {
  return (
    <div className='mission'>
      <img src="https://stephanie-buckette.s3.amazonaws.com/missionhero.png" alt="kids playing" width={650}/>
      <div className='mission-section'>
        <h1>Our Mission</h1>
        <p>
          For The Kids goal has always been to raise awareness about our most
          vulnerable youth. As a community we are all responsible for the
          success of our foster children. Many people don't realize that there
          are other ways to help other than becoming a foster parent.
        </p>
        <p>
          Social work isn't an easy job and those lead to it know first hand
          that if you don't have the heart you won't make it long in this
          career. The same goes for fostering. That is why we want to share
          other ways to help our foster youth and families in our community.
        </p>
        <p>
          The biggest way YOU can help is simply by donating. We accept new and
          gently used clothing, new shoes, hygiene products and luggages/duffel
          bags.
        </p>
      </div>
      <div className='mission-section'>
        <h2>What sets us apart from the rest?</h2>
        <p>
          Our approach to donations is a bit different. Sure, we accept drop
          offs at the office at any time, however, we want to make donating a
          fun, interactive and exciting experience. The hope is to provide a
          community event- like a donation party, where those donating get the
          instant gratification of seeing their items go towards goal, sorting
          the items live and having fun in the process.
        </p>
      </div>
      <div className='mission-img'>
        <img src={imageA} alt='volunteers sorting' />
        <img src={imageB} alt='volunteers sorting' />
      </div>
      <div className='mission-section'>
        <h2>How can you help?</h2>
        <p>
          Donate! Volunteer! Stand alongside us as we make a difference in the
          lives of our foster children!
        </p>
        <h2>
          For more questions call 727-456-0600 and ask for Community Engagement.
        </h2>
      </div>
      <div className='mission-section'>
        <h2>Check us out on Social Media!</h2>
        <a
          href='https://www.facebook.com/fsssuncoast'
          target='_blank'
          rel='noopener noreferrer'
        >
          {<img src={fb} alt='facebook logo' width={50} />}
        </a>
        <a
          href='https://www.instagram.com/fsssuncoast/'
          target='_blank'
          rel='noopener noreferrer'
        >
          {<img src={instgram} alt='instgram logo' width={50} />}
        </a>
        <a
          href='https://www.linkedin.com/company/fssfamilies/'
          target='_blank'
          rel='noopener noreferrer'
        >
          {<img src={linkedin} alt='linkedin logo' width={50} />}
        </a>
      </div>
    </div>
  )
}

export default Mission
