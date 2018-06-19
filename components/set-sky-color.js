/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
AFRAME.registerComponent('set-sky-color', {
    schema: {
      on: {type: 'string'},
      target: {type: 'selector'},
      materialColor: {type: 'string'},
      dur: {type: 'number', default: 800}
    },
    
      init: function () {
        var data = this.data;
        var el = this.el;
        currentColor = data.target.getAttribute('material').color;
        destinationColor = data.materialColor;
        this.setupFadeInAnimation();
    
        el.addEventListener(data.on, function () {
          // Fade out image.
          data.target.emit('color-fade');
          // Wait for fade to complete.
        });
      },
    
      /**
       * Setup fade-in + fade-out.
       */
      setupFadeInAnimation: function () {
        var data = this.data;
        var targetEl = this.data.target;    
    
    
        // Create animation.
        targetEl.setAttribute('animation__set', {
          property: 'material.color',
          restartEvents: 'color-fade',
          dir: 'forwards',
          dur: data.dur,
          from: currentColor,
          to: destinationColor
        });
      }
    });
