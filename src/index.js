import React from 'react';
import ReactDOM from 'react-dom';

import useCollapse from 'react-collapsed';

import './index.css';

import Nav from 'components/nav/nav.js';
import Cover from 'views/cover/cover.js';
import Hotels from 'views/hotels/hotels.js';
import Registry from 'views/registry/registry.js';
import Party from 'views/party/party.js';
import Gallery from 'views/gallery/gallery.js'
import Info from 'views/info/info.js'

function Collapisable(props) {

    const { getCollapseProps, getToggleProps, isExpanded, setExpanded } = useCollapse();

    if (!isExpanded && props.id === props.toggled) {
        setExpanded(true);
        props.reset();
    }

    return (
        <div id={props.id} className='collapsible anchor'>

            <div className='header' {...getToggleProps()}>

                <div className='label'>
                    {props.header}
                </div>

                <div className="icon">
                    <i className={'fas fa-chevron-' + (isExpanded ? 'up' : 'down')}></i>
                </div>
    
            </div>

            <div {...getCollapseProps()}>
                <div className='content'>
                    {props.content}
                </div>
            </div>
        </div>
    );
}

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            toggledOpenArea: null
        };

        this.openArea = this.openArea.bind(this);
        this.reset = this.reset.bind(this);
    }

    openArea = (id) => {
        this.setState({
            toggledOpenArea: id
        });
    }

    reset = () => {
        this.setState({
            toggledOpenArea: null
        });
    }

    render() {
        return (
            <main>
                <Nav openArea={this.openArea} />
                <Cover />

                <Collapisable
                    id='hotels'
                    toggled={this.state.toggledOpenArea}
                    reset={this.reset}
                    header='Loding Links'
                    content={<Hotels />}
                />

                <Collapisable
                    id='registry'
                    toggled={this.state.toggledOpenArea}
                    reset={this.reset}
                    header='Registry Links'
                    content={<Registry />}
                />

                <Collapisable
                    id='info'
                    toggled={this.state.toggledOpenArea}
                    reset={this.reset}
                    header='Info'
                    content={<Info />}
                />

                <Collapisable
                    id='extras'
                    header='Gallery'
                    content={
                            <div>
                                <Party />

                                <Gallery />
                            </div>

                    }/>
            </main>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
)