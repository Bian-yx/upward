AFRAME.registerComponent('camera-events', {
  init: function () {
    var el = this.el;
    el.addEventListener('click', function () {
      if(jQuery(el).hasClass("frame-camera")) {
        jQuery('#camera').each(function() {
          var position = new THREE.Vector3( 0, 0, -2 );
          var rotation = new THREE.Vector3(0, 0, 0);
          position.applyQuaternion( this.object3D.quaternion );
          rotation = this.getAttribute('rotation');
          jQuery(".gallery-info").each(function() {
            this.setAttribute('visible', 'true');
            jQuery(this).removeClass('hidden');
          });
          jQuery('#info__panel').each(function() {
            this.setAttribute( 'position', { x: position.x, y: position.y, z: position.z } );
            this.setAttribute( 'rotation', { x: rotation.x, y: rotation.y, z: rotation.z } );
          })
        });
      }
      jQuery("#gallery__items").each(function () {
        this.setAttribute('visible', 'false');
        this.setAttribute('position', '0 100 0');
        jQuery(this).addClass('hidden');
      });
      jQuery("#gallery__arrows").each(function () {
        this.setAttribute('visible', 'false');
        this.setAttribute('position', '0 100 0');
        jQuery(this).addClass('hidden');
      });
      jQuery("#video__arrows").each(function () {
        this.setAttribute('visible', 'false');
        this.setAttribute('position', '0 100 0');
        jQuery(this).addClass('hidden');
      });
      if(jQuery(el).hasClass("info__close")) {
        jQuery("#gallery__items").each(function () {
          this.setAttribute('visible', 'true');
          this.setAttribute('position', '0 0 0');
          jQuery(this).removeClass('hidden');
        });
        jQuery("#gallery__arrows").each(function () {
          this.setAttribute('visible', 'true');
          this.setAttribute('position', '0 0 0');
          jQuery(this).removeClass('hidden');
        });
        jQuery("#video__arrows").each(function () {
          this.setAttribute('visible', 'true');
          this.setAttribute('position', '0 0 0');
          jQuery(this).removeClass('hidden');
        });
        jQuery("#sky").each(function() {
          this.removeAttribute('material', 'color');
        });
        /*jQuery(".monolith").each(function() {
          this.removeAttribute('material', 'opacity');
          this.removeAttribute('material', 'src');
          this.removeAttribute('material', 'color');
        });*/
        jQuery(".info-text").each(function() {
          this.setAttribute('material', 'src', '');
          this.setAttribute('material', 'color', '');
          this.setAttribute('material', 'transparent', 'true');
        });
        jQuery(".gallery-info").each(function() {
          this.setAttribute('visible', 'false');
          jQuery(this).addClass('hidden');
        });
      }
    });
  }
});