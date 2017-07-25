// Tests for links methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import {describe, beforeEach, it } from 'meteor/practicalmeteor:mocha';
import { Links } from './links.js';
import './methods.js';

if (Meteor.isServer) {
  describe('links methods', function linksMethodsTest() {
    beforeEach(function linksBeforeTest() {
      Links.remove({});
    });

    it('can add a new link', function linksMethodsTaskTest() {
      const addLink = Meteor.server.method_handlers['links.insert'];

      addLink.apply({}, ['meteor.com', 'https://www.meteor.com']);

      assert.equal(Links.find().count(), 1);
    });
  });
}
