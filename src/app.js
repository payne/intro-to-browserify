import $ from 'jquery';
import _ from 'lodash';
import 'bootstrap';
import displayOwners from './display_owners'

  const startAt = _.random(1, 5000);

$.get(`https://api.github.com/repositories?since=${startAt}`, repos => {
  const allOwners = _.map(repos, 'owner');
  const owners = _.uniqBy(allOwners, 'id');

  displayOwners(owners);
});
