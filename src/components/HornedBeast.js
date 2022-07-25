import { Component } from 'react'
import Data from '../Data.json'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class HornedBeast extends Component {
    constructor(props) {
        super(props);
        this.state = {favorite: 0};
    }

    handleClick = (e) => {
        this.setState({favorite: this.state.favorite + 1})
    }

    render(){
        return(
            <div className='Beasts'>
                {
                    Data && Data.map( beast => {
                        return(
                            <div className='list-beast'>
                                <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={beast.image_url} />
                                <Card.Body>
                                    <Card.Title>{beast.title}</Card.Title>
                                    <Card.Text>
                                        {beast.description}
                                        <br />
                                        <br />

                                        Likes: {this.state.favorite}
                                    </Card.Text>
                                    <Button variant="primary" onClick = {this.handleClick}>&#x2665;</Button>
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