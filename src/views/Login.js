import { useSkin } from '@hooks/useSkin'
import { Link, Redirect } from 'react-router-dom'
import { Facebook, Twitter, Mail, GitHub } from 'react-feather'
import InputPasswordToggle from '@components/input-password-toggle'
import { Row, Col, CardTitle, CardText, Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap'
import '@styles/base/pages/page-auth.scss'
import Bot from '../assets/images/bot.png'
import logo from '../assets/images/icons/customIcons/logo.svg'
const Login = () => {
  const [skin, setSkin] = useSkin()

  // const illustration = skin === 'dark' ? 'login-v2-dark.svg' : 'login-v2.svg',
  //   source = require(`@src/assets/images/pages/${illustration}`).default

  return (
    <div className='auth-wrapper auth-v2'>
      <Row className='auth-inner m-0'>
        
        <Col className='d-none d-lg-flex align-items-center p-5' lg='8' sm='12'>
          <div className='w-100 d-lg-flex align-items-center justify-content-center px-5'>
            <img className='img-fluid' src={Bot} alt='Login' />
          </div>
        </Col>
        <Col className='d-flex align-items-center auth-bg px-2 p-lg-5' lg='4' sm='12'>
          
          <Col className='px-xl-2 mx-auto' sm='8' md='6' lg='12'>
          <img src={logo} alt="invozone logo" style={{marginBottom: '10rem', height: '50px'}}/>
            <CardTitle tag='h4' className='font-weight-bold mb-1'>
              Welcome Back! 
            </CardTitle>
            <CardText tag='h1' className='font-weigh-bold mb-1' style={{color: 'black'}}>Login to your Account</CardText>
            <Form className='auth-login-form mt-2' onSubmit={e => e.preventDefault()}>
              <FormGroup>
                <Label className='form-label' for='login-email'>
                  Email
                </Label>
                <Input type='email' id='login-email' placeholder='username@invozone.com' autoFocus />
              </FormGroup>
              <FormGroup>
                <div className='d-flex justify-content-between'>
                  <Label className='form-label' for='login-password'>
                    Password
                  </Label>
                 
                </div>
                <InputPasswordToggle className='input-group-merge' id='login-password' />
              </FormGroup>
              <FormGroup>
                <CustomInput type='checkbox' className='custom-control-info' id='remember-me' label='Remember Me' />
              </FormGroup>
              <Button.Ripple tag={Link} to='/' color='info' block>
                Sign in
              </Button.Ripple>
            </Form>
            <Link to='/'>
                    <p tag="h2" className="text-center mt-2 ">Forgot Password?</p>
                  </Link>
          </Col>
        </Col>
      </Row>
    </div>
  )
}

export default Login
