import './hero.scss';
import { Navbar } from '../navbar/Navbar';
import { Banner } from './Banner';
import { Social } from './social/Social';

export const Hero = () => (
    <div className="hero">
        <Navbar/>
        <Banner/>
        <Social/>
    </div>
);
