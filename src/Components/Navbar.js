
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top " style={{ height: 'auto' }}>
        <div className="container-fluid">
          
          <Link className="navbar-brand" to="/">
            <img src="\logo_transparent2.jpg" style={{ width: '8rem',height:'auto',aspectRatio:'3/1',objectFit:'contain' }} alt="" />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end">
              <li className="nav-item mx-2">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              {/* <li className="nav-item mx-2">
                <Link className="nav-link" to="/about"   >About</Link>
              </li> */}

              <li className="nav-item mx-2">
                <Link className="nav-link" to="/business"  >Business</Link>
              </li>

              <li className="nav-item mx-2">
                <Link className="nav-link" to="/entertainment" >Entertainment</Link>
              </li>

              <li className="nav-item mx-2">
                <Link className="nav-link" to="/general" >General</Link>
              </li>

              <li className="nav-item mx-2">
                <Link className="nav-link" to="/health" >Health</Link>
              </li>

              <li className="nav-item mx-2">
                <Link className="nav-link" to="/science" >Science</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/sports" >Sports</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/technology" >Technology</Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
