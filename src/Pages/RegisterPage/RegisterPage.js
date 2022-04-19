import './RegisterPage.css';
import logo from './logo.png';
import {Link} from 'react-router-dom';

const RegisterPage = () => {
  return (
    <>
      <div className="login-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="form-section">
                <div className="logo-2">
                  <Link to={"/home"}>
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
                <h3>Create An Cccount</h3>
                <form action="#" method="GET">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Full Name"
                      aria-label="Full Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
                      aria-label="Email Address"
                    />
                  </div>
                  <div className="form-group clearfix">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      autoComplete="off"
                      placeholder="Password"
                      aria-label="Password"
                    />
                  </div>
                  <div className="form-group mb-0 clearfix">
                    <button type="submit" className="btn-md btn-theme float-start">
                      Register
                    </button>
                  </div>
                  <div className="clearfix" />
                </form>
                <p className={"already-member"}>
                  Already a member?{" "}
                  <Link to={"/login"} className="thembo">
                    {" "}
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
