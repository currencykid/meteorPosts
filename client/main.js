import React from 'react'; 
import ReactDOM from 'react-dom'; 
import App from './components/app'; 
import {Posts} from '../imports/collections/posts';

Meteor.startup(() => {
  // code to run on client at startup
  ReactDOM.render(<App/>, document.querySelector('.target')); 
});
