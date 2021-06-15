import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import homeanime from './../../assets/assets/home_anime.gif'
import Modal from '../Modal/Modal'

class Home extends React.Component {

    state={ showModal:false};

    componentDidMount() {
        setTimeout(()=>{
        this.setState({showModal:true})
        },1000)
    }

    closemodal=()=>{
this.setState({showModal:false})
    }

    render (){

        return (
            <div className="home-container">
                {this.state.showModal && <Modal closemodal={this.closemodal} />}
                <div className="header-text">
                    <h1>Welcome to My Portfolio!</h1>
                    <p>This is Arjun Ravi, a Front End Web Developer</p>
                </div>
                <div className="head-btns">
                    <Link to='/about' className='btn btn-white'>
                        <p className="btn-text">Know more about me</p>
                    </Link>
                    <Link to='/contact' className='btn btn-transparent'>
                        <p className="btn-text">Connect with me</p>
                    </Link>
                </div>
                <div className="splash-image">
                    <img src={homeanime} alt="home-img" className='home-anime'/>
                </div>
            </div>
        )
    }
}

export default Home
