import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">produkty</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">nazwa produktu</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">cena</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">ilość</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">usuń</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">całość</p>
                </div>
            </div>
        </div>
    )
}
