require.config({
  paths: {
    jquery: '../components/jquery/jquery',
    handlebars: '../components/handlebars/handlebars',
    ember: '../components/ember/ember',
    bootstrap: 'vendor/bootstrap'
  },
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
    'handlebars': {
      exports: 'Handlebars'
    },
    'ember': {
      deps: ['jquery', 'handlebars'],
      exports: 'Ember'
    },
    'app' : {
      deps: ['ember', 'templates']
    },
    'templates': {
      deps: ['ember']
    }
  }
});

require(['app'], function (app, $) {
  'use strict';
  // use app here
  console.log('App Started');
});