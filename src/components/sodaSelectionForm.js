import React, { Component } from 'react';
import { Row, Col, Card } from 'reactstrap';
import _ from 'lodash';




function DrinkType(props) {
    return (
        <Col className="drink-type-wrapper">
            <Row>
                <Col>
                    <input className='drink-type-button' type="button" value={props.value} placeholder={props.placeholder} onClick={props.onClick} />
                </Col>
            </Row>
        </Col>
    )
}

export default class SodaSelectionForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            diet: null,
            cola: 'Cola',
            citrus: 'Citrus',
            rootBeer: 'Root Beer',
            fruitSodas: 'fruit sodas',
            drPepper: 'Dr Pepper',
            lemonade: 'Lemonade',
            icedTea: 'Iced Tea',
            sodaWater: 'Soda WAter'
        }
        this.handleRegular = this.handleRegular.bind(this);
        this.handleDiet = this.handleDiet.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleRegular(event) {
        this.setState({
            diet: false
        })
        console.log('Regular');
        event.preventDefault();
    }

    handleDiet(event) {
        this.setState({
            diet: true
        })
        console.log('Diet');
        event.preventDefault();
    }
    handleClick(event) {
        
    }

    render() {

        this.btnData = [
            {value: 'Cola', prop: 'cola', state: this.state.cola},
            {value: 'Citrus', prop: 'citrus', state: this.state.citrus},
            {value: 'Root Beer', prop: 'rootBeer', state: this.state.rootBeer},
            {value: 'Fruit Sodas', prop: 'fruitSodas', state: this.state.fruitSodas},
            {value: 'Dr Pepper', prop: 'drPepper', state: this.state.drPepper},
            {value: 'Lemonade', prop: 'lemonade', state: this.state.lemonade},
            {value: 'Iced Tea', prop: 'icedTea', state: this.state.icedTea},
            {value: 'Soda Water', prop: 'sodaWater', state: this.state.sodaWater},
        ]

        return (
            <div>
                <h1>SELECT YOUR DRINK TYPE</h1>
                <div className='regular-diet-wrapper'>
                    <button className={this.diet = false ? 'selected' : 'regular-diet'} onClick={this.handleRegular}>Regular</button>
                    <button className='regular-diet' onClick={this.handleDiet}>Diet</button>
                </div>
                <Card className="card">
                    <Row style={{alignItems: 'center', justifyContent: 'center'}}>
                        {
                            _.map(this.btnData, (data, indexKey) => {
                                return <DrinkType key={indexKey} index={indexKey +1} value={data.value} state={data.state} onClick={this.handleClick()} />
                            })
                        }
                    </Row>
                </Card>
            </div>
        )
    }
}