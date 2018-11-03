import React                from 'react'
import PropTypes            from 'prop-types'
import Component            from 'react-pure-render/component'

// import AppBar               from '@material-ui/components/AppBar'

class Header extends Component {
    static propTypes = {
        headline:   PropTypes.string.isRequired,
        subline:    PropTypes.string
    }

    render () {
        const {headline, subline} = this.props

        return (
            <React.Fragment>
{/*                <AppBar
                    className="appBar"
                />*/}
                <h1 id="header">
                    {headline}
                    {subline &&
                    <span style={{fontSize: '0.4em'}}>
                        <br />
                        {subline}
                    </span>}
                </h1>
            </React.Fragment>
        )
    }
}

export default Header
