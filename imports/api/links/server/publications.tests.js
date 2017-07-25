// Tests for the links publications
//
// https://guide.meteor.com/testing.html

import { assert } from 'meteor/practicalmeteor:chai';
import {describe, beforeEach, it } from 'meteor/practicalmeteor:mocha';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { Links } from '../links.js';
import './publications.js';

describe('links publications', function linksPublicationsTest () {
  beforeEach(function linksPubBeforeTest() {
    Links.remove({});
    Links.insert({
      title: 'meteor homepage',
      url: 'https://www.meteor.com',
    });
  });

  describe('links.all', function findLinksAllTest() {
    it('sends all links', function findLinksAllAssertTest(done) {
      const collector = new PublicationCollector();
      collector.collect('links.all', (collections) => {
        assert.equal(collections.links.length, 1);
        done();
      });
    });
  });
});
