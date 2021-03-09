import './hero.scss';
import { Navbar } from '../navbar/Navbar';
import { Banner } from './Banner';
import { Social } from './social/Social';
import { dataProvider } from '../../../services/DataProvider';

export const Hero = () => (
    <div className="hero" style={ { background: `#fff url("${ dataProvider.tripImage('hero') }")` } }>
        <Navbar/>
        <Banner/>
        <Social/>
    </div>
);
