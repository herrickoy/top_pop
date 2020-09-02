import React, { Component } from 'react';
import { Row, Col, Card } from 'reactstrap';
import _ from 'lodash';




// function DrinkType(props) {
//     return (

//     )
// }

export default class SodaSelectionForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            diet: null
        }
        this.handleRegular = this.handleRegular.bind(this);
        this.handleDiet = this.handleDiet.bind(this);

    }

    handleRegular(event) {
        this.setState({
            diet: false
        })
        console.log('Regular');
        event.preventDefault();
    }

    handleDiet (event) {
        this.setState({
            diet: true
        })
        console.log('Diet');
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>SELECT YOUR DRINK TYPE</h1>
                <div className='regular-diet-wrapper'>
                    <button className={this.diet = false ? 'selected' : 'regular-diet'} onClick={this.handleRegular}>Regular</button>
                    <button className='regular-diet' onClick={this.handleDiet}>Diet</button>
                </div>
                
            </div>
        )
    }
}