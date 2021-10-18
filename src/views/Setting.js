
import React, { Fragment } from 'react'
import { Row, Col, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { MessageCircle, User, Bell, Edit2 } from 'react-feather'
import {Tab, Nav} from 'react-bootstrap'
import ArrowBottom from '../assets/images/icons/customIcons/arrowbottom.svg'
import Button from 'reactstrap/lib/Button'
const Setting = () => {
    return (
        <div className="settings">

<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row className="setting_row" >
    <Col sm={3}>
    <div className="leftbar">
      <Nav variant="pills" className="flex-column setting-nav">
      <p>Channel</p>
        <Nav.Item className="nav-item-wrapper">
          <Nav.Link className="nav-link-wrapper" eventKey="first">
              <div className="setting_live_chat">
                <MessageCircle />
                    Live Chat
                </div>
            </Nav.Link>
        </Nav.Item>
        <p className="personal-wrapper">personal</p>
        <Nav.Item className="nav-item-wrapper">
          <Nav.Link className="nav-link-wrapper" eventKey="second">
          <div className="setting_live_chat">
                                <User />
                                Accounts
                            </div>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item-wrapper">
          <Nav.Link className="nav-link-wrapper" eventKey="third">
          <div className="setting_live_chat">
                                <Bell />
                                Notifications
                            </div>
          </Nav.Link>
        </Nav.Item>
        <p className="personal-wrapper">General</p>
        <Nav.Item className="nav-item-wrapper">
          <Nav.Link className="nav-link-wrapper" eventKey="fourth">
          <div className="setting_live_chat">
          <User />
                                Admin
                            </div>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        <div className="Rightbar">
                    <div className="rightbar_head">
                        <div className="right_rightbar_head_child">
                        <Edit2 />
                        <h3> Widget Setting</h3>
                        </div>

                        <img src={ArrowBottom} />
                    </div>

                    <div className="background_colors">
                        <h4>Background Color:</h4>

                        <div className="color_options">
                            <div className="option1"></div>
                            <div className="option2"></div>
                            <div className="option3"></div>
                            <div className="option4"></div>
                            <div className="option5"></div>
                        </div>
                    </div>

                    <div className="Text_color">
                        <h4>Text Color:</h4>

                        <div className="text_color_options">
                        <Button className="light_button">Light</Button>
                        <Button className="dark_button">Dark</Button>
                        </div>
                    </div>

                    <div className="chat_visibility_option">
                        <h4>Chat Visibility</h4>
                        <UncontrolledButtonDropdown>
                            <DropdownToggle outline color='primary' caret>
                                Both on Desktop and Mobile Devices
                            </DropdownToggle>
                            <DropdownMenu>
                            <DropdownItem href='/' tag='a'>
                                Desktop Devices
                            </DropdownItem>
                            <DropdownItem href='/' tag='a'>
                                Mobile Device
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                        
                    </div>
                    <div className="rightbar_head">
                        <div className="left_rightbar_head_child">
                        <Edit2 />
                        <h3>Get Started</h3>
                        </div>

                        <img src={ArrowBottom} />
                    </div>

                    <div className="background_status">
                        <h4>Background Status:</h4>

                        <input placeholder="hi, im IZ bot" />
                    </div>
                    <div className="background_status">
                        <h4>Message</h4>

                        <input placeholder="What would You like to do" />
                    </div>
                    
                </div>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
            hellow
        </Tab.Pane>
        <Tab.Pane eventKey="third">
            hellow3
        </Tab.Pane>
        <Tab.Pane eventKey="fourth">
            hellow4
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

            {/* <Row className="setting_row" >
                <Col xs='4' xl='3'>
                    <div className="leftbar">
                        <div className="leftbar_chanel">
                            <p>Channel</p>

                            <div className="setting_live_chat">
                                <MessageCircle />
                                <h5>Live Chat</h5>
                            </div>
                        </div>

                        <div className="leftbar_chanel_perosnal">
                            <p className="personal-wrapper">personal</p>

                            <div className="setting_live_chat">
                                <User />
                                <h5>Accounts</h5>
                            </div>
                            <div className="setting_live_chat">
                                <Bell />
                                <h5>Notifications</h5>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs='8' xl='9'>
                <div className="Rightbar">
                    <div className="rightbar_head">
                        <div className="right_rightbar_head_child">
                        <Edit2 />
                        <h3> Widget Setting</h3>
                        </div>

                        <img src={ArrowBottom} />
                    </div>

                    <div className="background_colors">
                        <h4>Background Color:</h4>

                        <div className="color_options">
                            <div className="option1"></div>
                            <div className="option2"></div>
                            <div className="option3"></div>
                            <div className="option4"></div>
                            <div className="option5"></div>
                        </div>
                    </div>

                    <div className="Text_color">
                        <h4>Text Color:</h4>

                        <div className="text_color_options">
                        <Button className="light_button">Light</Button>
                        <Button className="dark_button">Dark</Button>
                        </div>
                    </div>

                    <div className="chat_visibility_option">
                        <h4>Chat Visibility</h4>
                        <UncontrolledButtonDropdown>
                            <DropdownToggle outline color='primary' caret>
                                Both on Desktop and Mobile Devices
                            </DropdownToggle>
                            <DropdownMenu>
                            <DropdownItem href='/' tag='a'>
                                Desktop Devices
                            </DropdownItem>
                            <DropdownItem href='/' tag='a'>
                                Mobile Device
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                        
                    </div>
                    <div className="rightbar_head">
                        <div className="left_rightbar_head_child">
                        <Edit2 />
                        <h3>Get Started</h3>
                        </div>

                        <img src={ArrowBottom} />
                    </div>

                    <div className="background_status">
                        <h4>Background Status:</h4>

                        <input placeholder="hi, im IZ bot" />
                    </div>
                    <div className="background_status">
                        <h4>Message</h4>

                        <input placeholder="What would You like to do" />
                    </div>
                    
                </div>

                </Col>
            </Row> */}
        </div>
    )
}

export default Setting
