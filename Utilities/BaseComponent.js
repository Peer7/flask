'use strict'

import React, {Component} from 'react';
/*
  The purpose behind this class is just to enable 'this' to be binded
  for all class methods
*/
export default class BaseComponent extends Component {
    _bind(...methods) {
        methods.forEach( (method) => this[method] = this[method].bind(this) );
    }
}
