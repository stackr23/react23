import React from 'react'
import Component from 'react-pure-render/component'

class Header extends React.Component {

    render() {
        const {headline, subline} = this.props

        return (
            <React.Fragment>
                <h1 id="header">
                    {headline}
                    {subline && <span><br />{subline}</span>}
                </h1>
            </React.Fragment>
        )
    }

}

Header.defaultProps = {
    subline: 'test subline'
}

export default Header
