AFRAME.registerComponent('gallery-control', {
    init: function () {
      var el = this.el;
      el.addEventListener('click', function () {
        if(jQuery(this).hasClass("from-intro")) {
          jQuery("#scene__intro").each(function() {
            this.setAttribute('visible', 'false');
            this.setAttribute('position', '0 100 0');
            jQuery(this).addClass('hidden');
          });
        }
        if(jQuery(this).hasClass("from-dot")) {
          jQuery("#scene__dot").each(function() {
            this.setAttribute('visible', 'false');
            this.setAttribute('position', '0 100 0');
            jQuery(this).addClass('hidden');
          });
          jQuery("#dot__arrows").each(function() {
            this.setAttribute('visible', 'false');
            jQuery(this).addClass('hidden');
          });
          jQuery("#video__arrows").each(function() {
            this.setAttribute('visible', 'false');
            jQuery(this).addClass('hidden');
          });
          jQuery("#dot__items").each(function() {
            this.setAttribute('visible', 'false');
            jQuery(this).addClass('hidden');
          });
        }
        if(jQuery(this).hasClass("from-space")) {
          jQuery("#scene__space").each(function() {
            this.setAttribute('visible', 'false');
            this.setAttribute('position', '0 100 0');
            jQuery(this).addClass('hidden');;
          });
        }
        if(jQuery(this).hasClass("from-stereo")) {
          jQuery("#scene__stereo").each(function() {
            this.setAttribute('visible', 'false');
            this.setAttribute('position', '0 100 0');
            jQuery(this).addClass('hidden');;
          });
        }
        if(jQuery(this).hasClass("from-outside")) {
          jQuery("#scene__outside").each(function() {
            this.setAttribute('visible', 'false');
            this.setAttribute('position', '0 100 0');
            jQuery(this).addClass('hidden');;
          });
        }
        if(jQuery(this).hasClass("from-flat")) {
          jQuery("#scene__flat").each(function() {
            this.setAttribute('visible', 'false');
            this.setAttribute('position', '0 100 0');
            jQuery(this).addClass('hidden');
          });
        }
        if(jQuery(this).hasClass("from-line")) {
          jQuery("#scene__line").each(function() {
            this.setAttribute('visible', 'false');
            this.setAttribute('position', '0 100 0');
            jQuery(this).addClass('hidden');
          });
        }
        if(jQuery(this).hasClass("to-dot")) {
          jQuery("#scene__dot").each(function() {
            if(jQuery(this).hasClass('hidden')) {
              this.setAttribute('visible', 'true');
              this.setAttribute('position', '0 0 0');
              jQuery(this).removeClass('hidden');
            }
          });
          jQuery("#dot__arrows").each(function() {
            if(jQuery(this).hasClass('hidden')) {
              this.setAttribute('visible', 'true');
              jQuery(this).removeClass('hidden');
            }
          });
          jQuery("#video__arrows").each(function() {
            if(jQuery(this).hasClass('hidden')) {
              this.setAttribute('visible', 'true');
              jQuery(this).removeClass('hidden');
            }
          });
          jQuery("#dot__items").each(function() {
            if(jQuery(this).hasClass('hidden')) {
              this.setAttribute('visible', 'true');
              jQuery(this).removeClass('hidden');
            }
          });
          jQuery("#sky").each(function() {
            this.setAttribute('src', '#dot-360');
            this.setAttribute('material', 'color', '#FFFFFF');
          });
        }
        if(jQuery(this).hasClass("to-intro")) {
          jQuery("#scene__intro").each(function() {
            if(jQuery(this).hasClass('hidden')) {
              this.setAttribute('visible', 'true');
              this.setAttribute('position', '0 0 0');
              jQuery(this).removeClass('hidden');
            }
          });
          jQuery("#sky").each(function() {
            this.setAttribute('src', '');
            this.setAttribute('material', 'color', '#0E0063');
          });
        }
        if(jQuery(this).hasClass("to-flat")) {
          jQuery("#scene__flat").each(function() {
            if(jQuery(this).hasClass('hidden')) {
              this.setAttribute('visible', 'true');
              this.setAttribute('position', '0 0 0');
              jQuery(this).removeClass('hidden');
            }
          });
          jQuery("#sky").each(function() {
            this.setAttribute('src', '#flat-360');
            this.setAttribute('material', 'color', '#FFFFFF');
          });
        }
        if(jQuery(this).hasClass("to-line")) {
          jQuery("#scene__line").each(function() {
            if(jQuery(this).hasClass('hidden')) {
              this.setAttribute('visible', 'true');
              this.setAttribute('position', '0 0 0');
              jQuery(this).removeClass('hidden');
            }
          });
          jQuery("#sky").each(function() {
            this.setAttribute('src', '#video_flat');
            this.setAttribute('material', 'color', '#FFFFFF');
          });
        }
        if(jQuery(this).hasClass("to-space")) {
          jQuery("#scene__space").each(function() {
            if(jQuery(this).hasClass('hidden')) {
              this.setAttribute('visible', 'true');
              this.setAttribute('position', '0 0 0');
              jQuery(this).removeClass('hidden');
            }
          });
          jQuery("#sky").each(function() {
            this.setAttribute('src', '#video_space');
            this.setAttribute('material', 'color', '#FFFFFF');
          });
        }
        if(jQuery(this).hasClass("to-stereo")) {
          jQuery("#scene__stereo").each(function() {
            if(jQuery(this).hasClass('hidden')) {
              this.setAttribute('visible', 'true');
              this.setAttribute('position', '0 0 0');
              jQuery(this).removeClass('hidden');
            }
          });
          jQuery("#sky").each(function() {
            this.setAttribute('src', '#video_stereo');
            this.setAttribute('material', 'color', '#FFFFFF');
          });
        }
        if(jQuery(this).hasClass("to-outside")) {
          jQuery("#scene__outside").each(function() {
            if(jQuery(this).hasClass('hidden')) {
              this.setAttribute('visible', 'true');
              this.setAttribute('position', '0 0 0');
              jQuery(this).removeClass('hidden');
            }
          });
          jQuery("#sky").each(function() {
            this.setAttribute('src', '#video_outside');
            this.setAttribute('material', 'color', '#FFFFFF');
          });
        }
      });
    }
});