// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

// Skiibar jQuery
(function ($) {
    $.fn.appear = function (fn, options) {
        var settings = $.extend({
            data: undefined,
            one: true,
            accX: 0,
            accY: 0
        }, options);
        return this.each(function () {
            var t = $(this);
            t.appeared = false;
            if (!fn) {
                t.trigger('appear', settings.data);
                return;
            }
            var w = $(window);
            var check = function () {
                if (!t.is(':visible')) {
                    t.appeared = false;
                    return;
                }
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;
                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();
                if (y + th + ay >= b && y <= b + wh + ay && x + tw + ax >= a && x <= a + ww + ax) {
                    if (!t.appeared) t.trigger('appear', settings.data);
                } else {
                    t.appeared = false;
                }
            };
            var modifiedFn = function () {
                t.appeared = true;
                if (settings.one) {
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }
                fn.apply(this, arguments);
            };
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.bind('appear', settings.data, modifiedFn);
            w.scroll(check);
            $.fn.appear.checks.push(check);
            (check)();
        });
    };
    $.extend($.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function () {
            var length = $.fn.appear.checks.length;
            if (length > 0)
                while (length--)($.fn.appear.checks[length])();
        },
        run: function () {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });
    $.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function (i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function () {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });
    /*Smoth scroll*/
    $('.mainmenu a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
})(jQuery);
/* jQuery Load Project*/
$(function () {
    $(".project").slice(0, 3).show();
    $("#project_more").on('click', function (e) {
        e.preventDefault();
        $(".project:hidden").slice(0, 2).slideDown(500);
        if ($(".project:hidden").length == 0) {
            $("#project_more").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});
/* jQuery Load Blog*/
$(function () {
    $(".blog").slice(0, 3).show();
    $("#load_blog").on('click', function (e) {
        e.preventDefault();
        $(".blog:hidden").slice(0, 3).slideDown(500);
        if ($(".blog:hidden").length == 0) {
            $("#load_blog").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

$(document).on('ready', function () {
    $('#dodger_blue').click(dodger_blue);
    $('#san_marino').click(san_marino);
    $('#persian_green').click(persian_green);
    $('#wild_strawberry').click(wild_strawberry);
    $('#pear').click(pear);
    $('#roman_coffee').click(roman_coffee);
    $('#martiniqueapprox').click(martiniqueapprox);
    $('#cinnabarapprox').click(cinnabarapprox);

    function dodger_blue() {
        $('body').attr('class', 'dodger_blue');
    }

    function san_marino() {
        $('body').attr('class', 'san_marino');
    }

    function persian_green() {
        $('body').attr('class', 'persian_green');
    }

    function wild_strawberry() {
        $('body').attr('class', 'wild_strawberry');
    }

    function pear() {
        $('body').attr('class', 'pear');
    }

    function roman_coffee() {
        $('body').attr('class', 'roman_coffee');
    }

    function martiniqueapprox() {
        $('body').attr('class', 'martiniqueapprox');
    }

    function cinnabarapprox() {
        $('body').attr('class', 'cinnabarapprox');
    }

    $("#switcher li.switcher-icon").on("click", function () {
        $("#switcher").toggleClass('switch_show');
    });

});