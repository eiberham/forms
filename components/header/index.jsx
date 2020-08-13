import React from 'react'
import { atom, useRecoilState } from 'recoil'
import { FormOutlined } from '@ant-design/icons'

const loggedin = atom({
    key: 'loggedin',
    default: false,
})

const Header = () => {
    const [loggedIn, setLoggedIn] = useRecoilState(loggedin)
    return (
        <header>
            <div className="logo">
                <FormOutlined /> Forms
            </div>
            <button
                type="button"
                className="btn --link"
                onClick={() => setLoggedIn(true)}
            >
                {loggedIn ? 'Logged In' : 'Sign in'}
            </button>
        </header>
    )
}

export default Header
