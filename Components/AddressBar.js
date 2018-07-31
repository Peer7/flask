'use strict'

import React from 'react';
import {
  TextInput,
  View
} from 'react-native';
import BaseComponent from '../Utilities/BaseComponent';

const REF = 'urlInput'

class AddressBar extends BaseComponent {
    constructor(props) {
      super(props)
      this.state = {
        searchTerm: '',
        url: this.props.url
      }
    }

    componentsWillRecieveProps(newProps) {
        this.setState({
          url: newProps.url
        })
    }

    onSearchChange(e) {
      this.setState({
        url: e.target.value
      })
    }
}

AddressBar.propTypes = {
    input: React.PropTypes.string,
    url: React.PropTypes.string
};
