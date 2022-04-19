import logo from './logo.png';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {connect} from 'react-redux';
import globalActions from '../../Redux/actions/global';

const mapDispatchToProps = dispatch => ({
  login: credentials => new Promise((resolve, reject) =>
         dispatch(globalActions.loginUser(credentials, resolve, reject))),
});

const mapStateToProps = state => ({
  loggedIn: state.changeLogin,
});

const LoginPage = ({login, loggedIn}) => {
  const {handleSubmit, register} = useForm();

  const formSubmission = async data => {
    try {
      const response = await login(data);
    } catch(err) {
      alert("Invalid username or password.");
    }
  }

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
                <h3>Sign Into Your Account</h3>
                <form action="#" onSubmit={handleSubmit(formSubmission)}>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email Address"
                      aria-label="Email Address"
                      {...register("email", {
                        required: true
                      })}
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
                      {...register("pass", {
                        required: true
                      })}
                    />
                  </div>
                  <div className="form-group mb-0 clearfix">
                    <button type="submit" className="btn-md btn-theme float-start">
                      Sign in
                    </button>
                  </div>
                  <div className="clearfix" />
                </form>
                <p className={"already-member"}>
                  Don't have an account?{" "}
                  <Link to={"/register"} className="thembo">
                    {" "}
                    Register here
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
