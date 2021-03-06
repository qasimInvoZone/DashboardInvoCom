import { Fragment } from 'react'
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap'

const DashboardStats = () => {
  return (
    <Fragment>
      <Row>
        <Col md='6' xl='4'>
          <Card className='shadow-sm p-3 mb-2 bg-white rounded'>
            <CardBody>
              <CardTitle className="stats_heading">Agents Logged-in</CardTitle>
              <CardText className="stats_body"><h1>1,406</h1></CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card className='shadow-sm p-3 mb-2 bg-white rounded'>
            <CardBody>
              <CardTitle className="stats_heading">Total Chats</CardTitle>
              <CardText className="stats_body"><h1>16,634</h1></CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card className='shadow-sm p-3 mb-2 bg-white rounded'>
            <CardBody>
              <CardTitle className="stats_heading">Missed Chats</CardTitle>
              <CardText className="stats_body"><h1>37</h1></CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card className='shadow-sm p-3 mb-2 bg-white rounded'>
            <CardBody>
              <CardTitle className="stats_heading">Avg. Response Time</CardTitle>
              <CardText className="stats_body"><h1>0:16</h1></CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card className='shadow-sm p-3 mb-2 bg-white rounded'>
            <CardBody>
              <CardTitle className="stats_heading">Avg. Chat Duration</CardTitle>
              <CardText className="stats_body"><h1>4:36</h1></CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md='6' xl='4'>
          <Card className='shadow-sm p-3 mb-2 bg-white rounded'>
            <CardBody>
              <CardTitle className="stats_heading">Avg. wait Time</CardTitle>
              <CardText className="stats_body"><h1>0:38</h1></CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default DashboardStats
