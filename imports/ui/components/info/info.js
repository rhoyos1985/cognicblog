import { Meteor } from 'meteor/meteor';
import Template from 'meteor/blaze-html-templates';
import { Links } from '/imports/api/links/links.js';
import './info.html';

Template.info.onCreated(function suscribe() {
  Meteor.subscribe('links.all');
});

Template.info.helpers({
  links() {
    return Links.find({});
  },
});

Template.info.events({
  'submit .info-link-add'(event) {
    event.preventDefault();

    const target = event.target;
    const title = target.title;
    const url = target.url;

    Meteor.call('links.insert', title.value, url.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        title.value = '';
        url.value = '';
      }
    });
  },
});
