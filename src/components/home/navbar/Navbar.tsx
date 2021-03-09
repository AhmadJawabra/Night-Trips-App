import './navbar.scss';
import { Component, ReactNode } from 'react';

interface INavbarState {
    open: boolean;
}

export class Navbar extends Component<object, INavbarState> {
    state = { open: false };

    render(): ReactNode {
        const { open } = this.state;

        return (
            <nav className={ `main-nav ${ open ? 'open' : '' }` }>
                <div className="container">
                    <div className="logo"><h2>NT<span>.</span></h2></div>

                    <div className="btns-container">
                        <button className="search-icon"><i className="fas fa-search"/></button>
                        <button className="toggle-nav-btn" onClick={ () => this.setState({ open: !open }) }>menu</button>
                    </div>

                    <ul className="links-container">
                        <li>
                            <button>services</button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
