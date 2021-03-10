import './pickTrip.scss';
import React, { useState } from 'react';
import { generateRandomId } from '../../../util';
import { dataProvider } from '../../../services/DataProvider';
import { BaseButton } from '../../common/baseButton/BaseButton';

type Tabs = { id: string, title: string, decs: string, url: string, btnText: string, subTitle: string }[];

const description = `
    <p>
        Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat <br/>
        id fringilla arcu condimentum fames.
        <p></p>
        Aliquet dictum aliquet faucibus cursus turpis. Suspendisse cum <br/>
        rutrum sit ut sociis. Pellentesque neque orci adipiscing pharetra lacus, dignissim pharetra ipsum
        blandit.
        Feugiat quis quam consectetur lectus id quis tortor vel, mattis.
    </p>
`;

const btnText = 'SEE OUR LATEST OFFER';
const subTitle = 'GRAND DUNES \n LANDSCAPE';

const tabsContent: Tabs = [
    { id: generateRandomId(), title: 'Chill Adventure', decs: description, url: dataProvider.tripImage('gallery-one'), btnText, subTitle },
    { id: generateRandomId(), title: 'Spooky Times', decs: description, url: dataProvider.tripImage('gallery-one'), btnText, subTitle },
    { id: generateRandomId(), title: 'Desert Madness', decs: description, url: dataProvider.tripImage('gallery-one'), btnText, subTitle },
    { id: generateRandomId(), title: 'Out in the wild', decs: description, url: dataProvider.tripImage('gallery-one'), btnText, subTitle },
];

const handlePrevNext = (direction: 'previous' | 'next', tabs: Tabs, currentTabId: string): string => {
    let currentTabIndex = tabs.findIndex(({ id }) => id === currentTabId)!;

    if (direction === 'next') currentTabIndex = currentTabIndex === tabs.length - 1 ? tabs.length - 1 : currentTabIndex + 1;

    if (direction === 'previous') currentTabIndex = currentTabIndex === 0 ? 0 : currentTabIndex - 1;

    return tabs[currentTabIndex].id;
};

export const PickTrip: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>(tabsContent[0].id);
    const [hide, setHide] = useState<string>('');

    return (
        <section className="pick-trip">
            <div className="container">
                <header>
                    <h2>Pick your trip</h2>
                    <p className={ hide }>
                        <i className="fas fa-times" onClick={ () => setHide('animate-paragraph') } onTransitionEnd={ () => setHide('') }/>
                        Our team put together some trips to you to discover, <br/>
                        feel free to discover each of them.
                    </p>
                </header>

                <ul className="tabs">
                    { tabsContent.map(({ id, title }) =>
                        <li key={ id } onClick={ () => setActiveTab(id) } className={ `${ activeTab === id ? 'active' : '' }` }>{ title }</li>,
                    ) }
                </ul>

                <div className="wrapper">
                    { tabsContent.map(({ id, title, url, decs, subTitle, btnText }, idx) => (
                        activeTab === id &&
                        <div className="gallery" key={ id }>
                            <div className="image-container">
                                <div className="content" data-index={ `${ (idx + 1) < 10 ? `0${ idx + 1 }` : idx + 1 }.` }>
                                    <img src={ url } alt={ subTitle }/>

                                    <span>{ subTitle }</span>

                                    <div className="actions">
                                        <button onClick={ () => setActiveTab(handlePrevNext('previous', tabsContent, id)) } aria-label="previous"><i className="fas fa-arrow-left"/></button>
                                        <button onClick={ () => setActiveTab(handlePrevNext('next', tabsContent, id)) } aria-label="next"><i className="fas fa-arrow-right"/></button>
                                    </div>
                                </div>

                                <div className="dots">
                                    <span/>
                                    <span/>
                                    <span/>
                                    <span/>
                                    <span/>
                                    <span/>
                                    <span/>
                                    <span/>
                                    <span/>
                                    <span/>
                                    <span/>
                                    <span/>
                                </div>
                            </div>

                            <div className="info">
                                <h2>{ title }</h2>
                                <p dangerouslySetInnerHTML={ { __html: decs } }/>
                                <BaseButton text={ btnText } onClick={ () => undefined }/>

                                <div className="social-links">
                                    <span>share it:</span>

                                    <div className="social-icons">
                                        <i className="fab fa-twitter"/>
                                        <i className="fab fa-instagram"/>
                                        <i className="fab fa-facebook-f"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) }


                </div>
            </div>
        </section>
    );
};