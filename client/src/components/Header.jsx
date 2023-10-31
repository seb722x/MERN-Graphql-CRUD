import logo from './assests/logo.png'



export default function Header() {
  return (
      <nav className='navbar bg-light mb-4 p-0'>
          <div className='container'>
              <a href="/" className="flex">
                  <div className="d-flex">
                      <img src={logo} alt="logo" className='mr-2' />
                      <div>Project GRaphQl</div>
                  </div>
              </a>
          </div>
      </nav>
  )
}
