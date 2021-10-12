
import React, { Fragment } from 'react'
import { Row, Col, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { MessageCircle, User, Bell, Edit2 } from 'react-feather'
import ArrowBottom from '../assets/images/icons/customIcons/arrowbottom.svg'
import Button from 'reactstrap/lib/Button'
const Setting = () => {
    return (
        <div className="settings">
            <Row className="setting_row" >
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
                            <p>personal</p>

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
            </Row>
        </div>
    )
}

export default Setting
