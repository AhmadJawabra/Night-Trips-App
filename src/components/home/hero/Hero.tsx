import './hero.scss';
import { Component } from 'react';
import { Navbar } from '../navbar/Navbar';
import { Banner } from './Banner';

export class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <Navbar/>
                <Banner/>
            </div>
        );
    }
}