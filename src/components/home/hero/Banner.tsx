import { Component, ReactNode } from 'react';
import { dataProvider } from '../../../services/DataProvider';

export class Banner extends Component {
    render(): ReactNode {
        return (
            <div className="banner">
                <div className="wrapper">
                    <h1 className="trip-name">{ dataProvider.tripName }</h1>
                    <p className="trip-description">{ dataProvider.tripDescription }</p>
                    <p className="sub-description">
                        Neque, eros commodo, nascetur ullamcorper vitae. Tincidunt ut venenatis, volutpat
                        lorem ut faucibus mauris, quisque. Integer gravida sed quis congue. Vel risus, arcu a
                        viverra leo id pulvinar ultricies. Enim in in in pulvinar nulla sollicitudin. Ullamcorper.
                    </p>
                </div>
            </div>
        );
    }
}