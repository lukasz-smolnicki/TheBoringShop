import React from 'react'
import { Link } from 'react-router-dom'

export default function CartTotals({ value }) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-title text-title-short text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={() => clearCart()}>
                                wyczyść koszyk
                            </button>
                            <h5>
                                <span>
                                    suma :
                                </span> {cartSubTotal} zł
                            </h5>
                            <h5>
                                <span>
                                    podatek :
                                </span> {cartTax} zł
                            </h5>
                            <h5>
                                <span>
                                    łącznie do zapłaty :
                                </span> {cartTotal} zł
                            </h5>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
