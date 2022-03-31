import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, Navbar, Launch, List, Header, About, Footer } from "./containers";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="gradient_bg">
                        <Navbar />
                        <Header />
                    </div>
                    <Routes>
                        <Route exact path='/' element={< Home/>}/>
                        <Route exact path='/about' element={< About/>}/>
                        <Route exact path='/launch' element={< Launch/>}/>
                        <Route exact path='/list' element={< List/>}/>
                    </Routes>
                </div>
                <Footer />
            </Router>
        );
    }
}

export default App;
