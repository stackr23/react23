import React from 'react'

class CowSay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'default23',
            cowsay: ''
        }
    }

    async componentDidMount() {
        const {say} = await import(/* webpackChunkName: "cowsay" */ 'cowsay')
        this.say = say
        this.fillContent()
    }

    fillContent() {
        this.setState({
            cowsay: this.say({
                text: `
    I'm a MOOdule!
    A splitted code chunk,
    that is loaded asynchron
    via Webpacks dynamic import feature!

`,
                tongue: 'U',
                eyes: 'oO'
            })
        })
    }

    render() {
        return (
            <div id="CowSay" className="component">
                <pre>{this.state.cowsay}</pre>
            </div>
        )
    }
}

export default CowSay
