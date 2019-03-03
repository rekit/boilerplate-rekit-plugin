import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';

setConfig({ logLevel: 'debug' })

console.log('sample page');
export class SamplePage extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="pluginnameplaceholder-sample-page">
        This is a sample page for the plugin.
      </div>
    );
  }
}
export default hot(SamplePage);
