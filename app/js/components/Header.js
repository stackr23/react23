import React                from 'react'
import PropTypes            from 'prop-types'
import Component            from 'react-pure-render/component'

class Header extends Component {
    static propTypes = {
        headline:   PropTypes.text.required,
        subline:    PropTypes.text
    }

    render () {
        const {headline, subline} = this.props

        return (
            <React.Fragment>
                <h1 id="header">
                    {headline}
                    {subline &&
                    <span style="font-size: 0.5rem;">
                        <br />
                        {subline}
                    </span>}
                </h1>
            </React.Fragment>
        )
    }
}

export default Header
