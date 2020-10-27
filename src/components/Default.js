import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                            <h1 className="" display-3>404</h1>
                            <h1>błąd</h1>
                            <h2>strona nie odnaleziona</h2>
                            <h3>żądany adres <span className="text-danger">{this.props.location.pathname}</span> nie został odnaleziony</h3>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}