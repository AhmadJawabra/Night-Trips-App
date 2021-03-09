import './hero.scss';
import { Component } from 'react';
import { Navbar } from '../navbar/Navbar';

export class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <Navbar/>
            </div>
        );
    }
}