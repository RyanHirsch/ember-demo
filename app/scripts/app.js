/*global define */
define([], function () {
  'use strict';
  var App = Em.Application.create({
    rootElement: $('#app'),
  });
  App.Router.map(function() {
    this.route('about');
  })

  window.App = App;
});