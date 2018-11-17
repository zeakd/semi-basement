import React, { Component } from 'react'

import classnames from 'classnames/bind'

import css from './Tooltip.scss'

const cx = classnames.bind(css)
const moduleName = 'Tooltip'

class Tooltip extends Component {
  constructor(props) {
    super(props)

    this.state = { opacity: false }
  }

  toggle = e => {
    this.setState({ opacity: !this.state.opacity })
    e.stopPropagation()
  }

  render() {
    const style = {
      opacity: +this.state.opacity,
      zIndex: this.state.opacity ? 1000 : -1000,
      top: 60,
      left: -210,
      position: 'absolute'
    }
    return (
      <div className={cx(`${moduleName}`)}>
        <div onClick={this.toggle}>{this.props.children}</div>
        <div style={style} className={cx(`${moduleName}-tooltipWrapper`)}>
          <div className={cx(`${moduleName}-arrow`)} />
          <div className={cx(`${moduleName}-innerFirst`)}>
            <div className={cx(`${moduleName}-innerFirst-addIcon`)} />
            <span>add</span>
          </div>
          <div className={cx(`${moduleName}-innerSecond`)}>
            <div className={cx(`${moduleName}-innerSecond-shareIcon`)} />
            <span>share</span>
          </div>
          <div className={cx(`${moduleName}-innerThird`)}>
            <div className={cx(`${moduleName}-innerThird-likeIcon`)} />
            <span>like</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Tooltip