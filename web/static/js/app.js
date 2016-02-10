// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

var $decodedArea = $('.js-encDec__decodedArea');
var $encodedArea = $('.js-encDec__encodedArea');

var $decodeButton = $('.js-encDec__decodeButton');
var $encodeButton = $('.js-encDec__encodeButton');

$decodeButton.on('click', function (event) {
  var srcText = $encodedArea.val();
  $.post({
    url: '/url/decode',
    headers: {
      'x-csrf-token': $('.js-csrfToken').first().val()
    },
    data: {
      text: srcText
    },
  }).then(function (data) {
    var destText =_.has(data, 'text') ? data.text : '';
    $decodedArea.val(_.escape(destText));
  });
});

$encodeButton.on('click', function (event) {
  var srcText = $decodedArea.val();
  $.post({
    url: '/url/encode',
    headers: {
      'x-csrf-token': $('.js-csrfToken').first().val()
    },
    data: {
      text: srcText
    },
  }).then(function (data) {
    var destText =_.has(data, 'text') ? data.text : '';
    $encodedArea.val(_.escape(destText));
  });
});
