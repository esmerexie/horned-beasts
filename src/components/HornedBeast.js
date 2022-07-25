import { Component } from 'react'
import Data from '../Data.json'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class HornedBeast extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className='Beasts'>
                {
                    Data && Data.map( beast => {
                        return(
                            <div className='list'>
                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={beast.image_url} />
                                <Card.Body>
                                    <Card.Title>{beast.title}</Card.Title>
                                    <Card.Text>
                                        {beast.description}
                                    </Card.Text>
                                    <Button variant="primary">Like</Button>
                                </Card.Body>
                                </Card>
                            </div>

                        )
                    })
                }
            </div>
        )
    }
}

export default HornedBeast