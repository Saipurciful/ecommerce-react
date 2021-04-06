import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../actions/userActions'
import { Link } from 'react-router-dom'




const Header = () => {

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
    };



    return (
        <header>
            <div className="grid-container">
                <header className="row">

                    <div>
                        <Link className="brand" to="/"> Embroidery</Link>
                    </div>
                    <div>
                        <Link to="/cart"><i className="fas fa-shopping-cart"></i> Cart{cartItems.length > 0 && (

                            <span className="badge">{cartItems.length}</span>
                        )}
                        </Link>

                        {userInfo ? (
                            <div className="dropdown">
                                <Link to="#">
                                    {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                                </Link>
                                <ul className="dropdown-content">
                                    <li>
                                        <Link to="#signout" onClick={signoutHandler}>
                                            Sign Out</Link>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                                <Link to="/signin"> <i className="fas fa-user"></i> Sign In</Link>
                            )}
                    </div>
                </header>
            </div>
        </header>

    )
}

export default Header
