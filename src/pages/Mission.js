import imageA from '../images/sorting.png'
import imageB from '../images/donations.png'
const Mission = () => {
  return (
    <div className='mission'>
      <div className='mission-img'>
        <img src={imageA} alt="volunteers sorting" />
        <img src={imageB} alt="volunteers sorting" />
      </div>
      <h1>Our Mission</h1>
      <p>
        For The Kids goal has always been to raise awareness about our most
        vulnerable youth. As a community we are all responsible for the success
        of our foster children. Many people don't realize that there are other
        ways to help other than becoming a foster parent.
      </p>
      <p>
        Social work isn't an easy job and those lead to it know first hand that
        if you don't have the heart you won't make it long in this career. The
        same goes for fostering. That is why we want to share other ways to help
        our foster youth and families in our community.
      </p>
      <p>
        The biggest way YOU can help is simply by donating. We accept new and
        gently used clothing, new shoes, hygiene products and luggages/duffel
        bags.
      </p>
      <br />
      <h2>What sets us apart from the rest?</h2>
      <p>
        Our approach to donations is a bit different. Sure, we accept drop offs at the office at any time, however, we want to make donating a fun, interactive and exciting experience. The hope is to provide a community event- like a donation party, where those donating get the instant gratification of seeing their items go towards goal, sorting the items live and having fun in the process.
      </p>
      <br />
      <h2>How can you help?</h2>
      <p>
        Donate! Volunteer! Stand alongside us as we make a difference in the lives of our foster children!
      </p>
      <br />
      <h2>For more questions call 727-456-0600 and ask for Community Engagement.</h2>
      <br />
      <div>
        <h2>Check us out on Social Media!</h2>
        <a href="http://">FB</a>
        <a href="http://">Insta</a>
        <a href="http://">LinkedIn</a>
      </div>
    </div>
  )
}

export default Mission
