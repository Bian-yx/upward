/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
AFRAME.registerComponent('set-info', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;


    el.addEventListener(data.on, function () {
      // Fade out image.
      data.target.setAttribute('material', 'src', data.src);
      data.target.emit('set-info-fade');
      // Wait for fade to complete.
    });
  }
});