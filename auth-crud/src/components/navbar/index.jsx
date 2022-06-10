import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { logOut } from '../../store/reducers/authSlice'
const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state.auth }));
  const handleLogout = () => {
    dispatch(logOut());
  }
  return (
    <div className="pt-1">
      {user && (<Link to="/profile" className="text-decoration-none mx-4 text-muted font-weight-bold">
        <img width="40px" src="https://c.clc2l.com/t/r/e/reddit-_pAyiQ.png" />
        <span className="brand">Tran Dung</span>
      </Link>)}
      {!user && (<Link to="/register" className="text-decoration-none">
        <button className="btn btn-primary">
          Register
        </button>
      </Link>)}
      
      {!user && <Link to="/login" className="text-decoration-none mx-3">
        <button className="btn btn-primary">
          Login
        </button>
      </Link>}
      {user && (<button className="btn btn-danger" onClick={handleLogout}>Logout</button>)}
    </div>
  )
}

export default Navbar