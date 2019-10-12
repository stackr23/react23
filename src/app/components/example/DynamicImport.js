import React from 'react'

class DynamicImported extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme:  'default23',
      comp:   '',
      loaded: false,
    }
  }

  async componentDidMount() {
    const AsyncComponent = import(
      /* webpackChunkName: "AsyncComponent" */
      './AsyncComponent'
    )

    this.setState({
      comp:   AsyncComponent,
      loaded: true,
    })
  }

  render() {
    const { loaded, AsyncComponent } = this.state

    return (
      <div id="CowSay" className="component">
                DynamicImported
        {loaded && <AsyncComponent />}
      </div>
    )
  }
}

export default DynamicImported
