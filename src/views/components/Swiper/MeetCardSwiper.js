import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Card, CardBody } from 'reactstrap'
import AvatarGroup from '@components/avatar-group'

export default function MeetCardSwiper() {
    const data = [
        {
          title: 'Billy Hopkins',
          placement: 'bottom',
          img: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
          imgHeight: 33,
          imgWidth: 33
        },
        {
          title: 'Amy Carson',
          placement: 'bottom',
          img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default,
          imgHeight: 33,
          imgWidth: 33
        },
        {
          meta: '+'
        }
      ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
 
  return (
    <Slider {...settings}>
        
      <div>
      <Card className='card-developer-meetup'>

<CardBody>

  <h2 className="text-dark"><strong>Mr.Alvis</strong></h2>
  <h6 className='mb-0'>Web Development</h6>
  <small>10:AM to 6:PM</small>

  <AvatarGroup data={data} />
</CardBody>
</Card>
      </div>
      <div>
      <Card className='card-developer-meetup'>

<CardBody>

  <h2 className="text-dark"><strong>Mr.Alvis</strong></h2>
  <h6 className='mb-0'>Web Development</h6>
  <small>10:AM to 6:PM</small>

  <AvatarGroup data={data} />
</CardBody>
</Card>
      </div>
      <div>
      <Card className='card-developer-meetup'>

<CardBody>

  <h2 className="text-dark"><strong>Mr.Alvis</strong></h2>
  <h6 className='mb-0'>Web Development</h6>
  <small>10:AM to 6:PM</small>

  <AvatarGroup data={data} />
</CardBody>
</Card>
      </div>
      <div>
      <Card className='card-developer-meetup'>

<CardBody>

  <h2 className="text-dark"><strong>Mr.Alvis</strong></h2>
  <h6 className='mb-0'>Web Development</h6>
  <small>10:AM to 6:PM</small>

  <AvatarGroup data={data} />
</CardBody>
</Card>
      </div>
     
    </Slider>
  )
}