import React from 'react'

export default function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    const priceFixed = price.toFixed(2);
    const totalFixed = total.toFixed(2);
    return (
        <div className="row my-2 text-title text-title-short text-center" >
            <div className="col-10 mx-auto col-lg-2">
                <img
                    src={img}
                    style={{ width: '5rem', height: '5rem' }}
                    className='img-fluid' alt="produkt"
                />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">produkt : </span>
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">cena : </span>
                {priceFixed} zł
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
                            -
                        </span>
                        <span className="btn btn-black mx-1">
                            {count}
                        </span>
                        <span className="btn btn-black mx-1" onClick={() => increment(id)}>
                            +
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => removeItem(id)}><i className="fas fa-trash"></i></div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>łączna cena : {totalFixed} zł</strong>
            </div>
        </div >
    )
}
