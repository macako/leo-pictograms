import React, { Component } from 'react';
import ColorListComponent from './ColorListComponent';
import PictogramZoomedComponent from './PictogramZoomedComponent';
import createData, { COLOR_LIST } from '../../utils/Constants';

class DashboardComponent extends Component {
  renderColorListComponent() {
    return COLOR_LIST.map(({ datas, classColor, size }) => {
      return (
        <ColorListComponent
          key={classColor}
          datas={createData(datas, size)}
          classColor={classColor}
        />
      );
    });
  }

  render() {
    return (
      <section className='row justify-content-center align-items-start mx-1'>
        <PictogramZoomedComponent />
        {this.renderColorListComponent()}
      </section>
    );
  }
}

export default DashboardComponent;
