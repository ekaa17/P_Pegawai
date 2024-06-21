(function ($) {
  'use strict';

  setTimeout(function () {
    if (window.___browserSync___ === undefined && Number(localStorage.getItem('AdminLTE:Demo:MessageShowed')) < Date.now()) {
      localStorage.setItem('AdminLTE:Demo:MessageShowed', (Date.now()) + (15 * 60 * 1000));
      alert('You loaded AdminLTE\'s "demo.js", \nthis file is only created for testing purposes!');
    }
  }, 1000);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function createSkinBlock(colors, callback, noneSelected) {
    var $block = $('<select />', {
      class: noneSelected ? 'custom-select mb-3 border-0' : 'custom-select mb-3 text-light border-0 ' + colors[0].replace(/accent-|navbar-/, 'bg-')
    });

    if (noneSelected) {
      var $default = $('<option />', {
        text: 'None Selected'
      });

      $block.append($default);
    }

    colors.forEach(function (color) {
      var $color = $('<option />', {
        class: (typeof color === 'object' ? color.join(' ') : color).replace('navbar-', 'bg-').replace('accent-', 'bg-'),
        text: capitalizeFirstLetter((typeof color === 'object' ? color.join(' ') : color).replace(/navbar-|accent-|bg-/, '').replace('-', ' '))
      });

      $block.append($color);
    });

    if (callback) {
      $block.on('change', callback);
    }

    return $block;
  }

  var $sidebar = $('.control-sidebar');
  var $container = $('<div />', {
    class: 'p-3 control-sidebar-content'
  });

  $sidebar.append($container);

  // Checkboxes
  $container.append(
    '<h5>Customize AdminLTE</h5><hr class="mb-2"/>'
  );

  // Dark Mode Checkbox
  var $dark_mode_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('dark-mode'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('dark-mode');
    } else {
      $('body').removeClass('dark-mode');
    }
  });

  var $dark_mode_container = $('<div />', { class: 'mb-4' }).append($dark_mode_checkbox).append('<span>Dark Mode</span>');
  $container.append($dark_mode_container);

  // Header Options
  $container.append('<h6>Header Options</h6>');

  // Fixed Header Checkbox
  var $header_fixed_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('layout-navbar-fixed'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('layout-navbar-fixed');
    } else {
      $('body').removeClass('layout-navbar-fixed');
    }
  });

  var $header_fixed_container = $('<div />', { class: 'mb-1' }).append($header_fixed_checkbox).append('<span>Fixed</span>');
  $container.append($header_fixed_container);

  // Dropdown Legacy Offset Checkbox
  var $dropdown_legacy_offset_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasClass('dropdown-legacy'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('dropdown-legacy');
    } else {
      $('.main-header').removeClass('dropdown-legacy');
    }
  });

  var $dropdown_legacy_offset_container = $('<div />', { class: 'mb-1' }).append($dropdown_legacy_offset_checkbox).append('<span>Dropdown Legacy Offset</span>');
  $container.append($dropdown_legacy_offset_container);

  // No Border Checkbox
  var $no_border_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasClass('border-bottom-0'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('border-bottom-0');
    } else {
      $('.main-header').removeClass('border-bottom-0');
    }
  });

  var $no_border_container = $('<div />', { class: 'mb-4' }).append($no_border_checkbox).append('<span>No border</span>');
  $container.append($no_border_container);

  // Sidebar Options
  $container.append('<h6>Sidebar Options</h6>');

  // Collapsed Sidebar Checkbox
  var $sidebar_collapsed_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('sidebar-collapse'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('sidebar-collapse');
      $(window).trigger('resize');
    } else {
      $('body').removeClass('sidebar-collapse');
      $(window).trigger('resize');
    }
  });

  var $sidebar_collapsed_container = $('<div />', { class: 'mb-1' }).append($sidebar_collapsed_checkbox).append('<span>Collapsed</span>');
  $container.append($sidebar_collapsed_container);

  // Sidebar Fixed Checkbox
  var $sidebar_fixed_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('layout-fixed'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('layout-fixed');
      $(window).trigger('resize');
    } else {
      $('body').removeClass('layout-fixed');
      $(window).trigger('resize');
    }
  });

  var $sidebar_fixed_container = $('<div />', { class: 'mb-1' }).append($sidebar_fixed_checkbox).append('<span>Fixed</span>');
  $container.append($sidebar_fixed_container);

  // Sidebar Mini Checkbox
  var $sidebar_mini_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('sidebar-mini'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('sidebar-mini');
    } else {
      $('body').removeClass('sidebar-mini');
    }
  });

  var $sidebar_mini_container = $('<div />', { class: 'mb-1' }).append($sidebar_mini_checkbox).append('<span>Sidebar Mini</span>');
  $container.append($sidebar_mini_container);

  // Sidebar Mini MD Checkbox
  var $sidebar_mini_md_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('sidebar-mini-md'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('sidebar-mini-md');
    } else {
      $('body').removeClass('sidebar-mini-md');
    }
  });

  var $sidebar_mini_md_container = $('<div />', { class: 'mb-1' }).append($sidebar_mini_md_checkbox).append('<span>Sidebar Mini MD</span>');
  $container.append($sidebar_mini_md_container);

  // Sidebar Mini XS Checkbox
  var $sidebar_mini_xs_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('sidebar-mini-xs'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('sidebar-mini-xs');
    } else {
      $('body').removeClass('sidebar-mini-xs');
    }
  });

  var $sidebar_mini_xs_container = $('<div />', { class: 'mb-1' }).append($sidebar_mini_xs_checkbox).append('<span>Sidebar Mini XS</span>');
  $container.append($sidebar_mini_xs_container);

  // Nav Flat Style Checkbox
  var $flat_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-flat'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-flat');
    } else {
      $('.nav-sidebar').removeClass('nav-flat');
    }
  });

  var $flat_sidebar_container = $('<div />', { class: 'mb-1' }).append($flat_sidebar_checkbox).append('<span>Nav Flat Style</span>');
  $container.append($flat_sidebar_container);

  // Nav Legacy Style Checkbox
  var $legacy_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-legacy'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-legacy');
    } else {
      $('.nav-sidebar').removeClass('nav-legacy');
    }
  });

  var $legacy_sidebar_container = $('<div />', { class: 'mb-4' }).append($legacy_sidebar_checkbox).append('<span>Nav Legacy Style</span>');
  $container.append($legacy_sidebar_container);

  // Brand Logo Options
  $container.append('<h6>Brand Logo Options</h6>');

  // No Brand Logo Checkbox
  var $no_brand_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.brand-link').hasClass('d-none'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.brand-link').addClass('d-none');
    } else {
      $('.brand-link').removeClass('d-none');
    }
  });

  var $no_brand_container = $('<div />', { class: 'mb-4' }).append($no_brand_checkbox).append('<span>No Brand Logo</span>');
  $container.append($no_brand_container);

  // Right Sidebar Options
  $container.append('<h6>Right Sidebar Options</h6>');

  // Show Right Sidebar Checkbox
  var $show_right_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('control-sidebar-open'),
    class: 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('control-sidebar-open');
    } else {
      $('body').removeClass('control-sidebar-open');
    }
  });

  var $show_right_sidebar_container = $('<div />', { class: 'mb-4' }).append($show_right_sidebar_checkbox).append('<span>Show Right Sidebar</span>');
  $container.append($show_right_sidebar_container);

  // Dark sidebar style
  $container.append(createSkinBlock([
    'dark-primary',
    'dark-warning',
    'dark-info',
    'dark-danger',
    'dark-success'
  ], function (e) {
    var color = $(this).find(':selected').attr('class');

    $('.nav-sidebar').removeClass().addClass('nav-sidebar bg-' + color.replace('bg-', '').replace('dark-', ''));
    $('.main-sidebar').removeClass().addClass('main-sidebar bg-' + color.replace('bg-', '').replace('dark-', ''));
  }, false));

  // Sidebar BG Gradient
  $container.append(createSkinBlock([
    'bg-gradient-primary',
    'bg-gradient-success',
    'bg-gradient-info',
    'bg-gradient-danger',
    'bg-gradient-warning',
    'bg-gradient-light',
    'bg-gradient-dark',
    'bg-gradient-white'
  ], function (e) {
    var color = $(this).find(':selected').attr('class');

    $('.nav-sidebar').removeClass().addClass('nav-sidebar ' + color.replace('bg-', ''));
  }, false));

  // Navbar Themes
  $container.append(createSkinBlock([
    'navbar-dark',
    'navbar-white'
  ], function (e) {
    var color = $(this).find(':selected').attr('class');

    $('.main-header').removeClass().addClass('main-header ' + color.replace('bg-', '').replace('navbar-', ''));
    $('.brand-link').removeClass().addClass('brand-link text-' + color.replace('navbar-', '').replace('bg-', '') + ' logo-lg');
  }, true));

  // Navbar Themes
  $container.append(createSkinBlock([
    'navbar-dark',
    'navbar-white'
  ], function (e) {
    var color = $(this).find(':selected').attr('class');

    $('.main-header').removeClass().addClass('main-header ' + color.replace('bg-', '').replace('navbar-', ''));
    $('.brand-link').removeClass().addClass('brand-link text-' + color.replace('navbar-', '').replace('bg-', '') + ' logo-lg');
  }, true));

  // Accent Color
  $container.append(createSkinBlock([
    'accent-danger',
    'accent-info',
    'accent-primary',
    'accent-success',
    'accent-warning'
  ], function (e) {
    var color = $(this).find(':selected').attr('class');

    $('.main-header').removeClass(function (index, className) {
      return (className.match(/(^|\s)accent-\S+/g) || []).join(' ');
    }).addClass(color.replace('bg-', '').replace('accent-', ''));
  }, true));

})(jQuery);
