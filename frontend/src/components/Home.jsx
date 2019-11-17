import React, { Component } from 'react'
import '../styles/Home.scss'

export default class Home extends Component {

    componentDidMount() {

    }

    render() {
        return (<div className="wrapper">
            <div className="random-machine">
                <div className="vegetable"></div>
                <div className="meat"></div>
            </div>
            <button className="start">帮我选择</button>
        </div>)
    }

}
