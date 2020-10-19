import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'

const routes = () => {
    return (
        <BrowserRouter>
            <Route path="/">
                <Home />
            </Route>
        </BrowserRouter>
    )
}

export default routes
