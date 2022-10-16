import github from '../images/github.png'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <a href="https://github.com/stephaniemlozano/allourkids-frontend" target='_blank' rel='noopener noreferrer' >{<img src={github} alt="github logo" width={50} className='footer-img'/>}</a>
        <br />
        <small>For The Kids</small>
        <br />
        <small> Copyright © 2022 | All rights reserved</small>
      </footer>
    </div>
  )
}

export default Footer