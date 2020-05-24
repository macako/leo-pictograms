import React, { Component } from 'react';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: localStorage.getItem('theme') === 'dark' ? true : false
    };

    this.toggleThemeChange = this.toggleThemeChange.bind(this);
  }

  componentDidMount() {
    document
      .getElementsByTagName('html')[0]
      .setAttribute('data-theme', localStorage.getItem('theme'));
  }

  toggleThemeChange() {
    const { checked } = this.state;
    let theme = 'light';

    if (checked === false) {
      theme = 'dark';
    }

    localStorage.setItem('theme', theme);

    document
      .getElementsByTagName('html')[0]
      .setAttribute('data-theme', localStorage.getItem('theme'));

    this.setState({
      checked: !checked
    });
  }

  render() {
    const URL_BASE = `${process.env.PUBLIC_URL}`;
    return (
      <header>
        <nav className='navbar navbar-expand'>
          <a
            className='navbar-brand text-muted font-weight-bold'
            href={`${URL_BASE}/`}>
            Leo's Pictograms
          </a>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link text-muted' href={`${URL_BASE}/`}>
                  Home
                </a>
              </li>
            </ul>
            <div className='ml-auto'>
              <label className='switch'>
                <input
                  type='checkbox'
                  defaultChecked={this.state.checked}
                  onChange={this.toggleThemeChange}
                />
                <span className='slider round' />
              </label>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default HeaderComponent;