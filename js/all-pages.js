!(function () {
    var n = $('.vert-loader');
    'true' == localStorage.getItem('page')
        ? setTimeout(function () {
              n.removeClass('show'),
                  setTimeout(function () {
                      n.removeClass('active');
                  }, 750);
          }, 50)
        : n.removeClass('show active');
})()
    jQuery(function (l) {
        var i = l('body');
        i.show();
        var e,
            n = window.innerWidth,
            o = l(window),
            t = l('#mastfoot').outerHeight();
        l('.l-header, .l-horizontal, .info-buttons-wrapper').addClass('show');
        var s,
            a = l('.container-load').innerWidth(),
            r = (o.innerWidth() - a) / 2;

        
        l('.outer-load').css('height', '9999px'),
            l('.outer-load').css('width', r + 'px'),
            l('.outer-load')
                .eq(1)
                .css('left', r + a + 'px'),
            'true' === localStorage.getItem('page')
                ? setTimeout(function () {
                      l('.outer-load').css('height', '0'),
                          l('.l-loading').addClass('show'),
                          l('.outer-load')
                              .eq(1)
                              .css({
                                  right: r + a + 'px',
                                  left: 'auto',
                              }),
                          l('.l-loading').addClass('hide-alt'),
                          setTimeout(function () {
                              l('.outer-load').css('height', '0'),
                                  l('.l-loading').removeClass('show'),
                                  l('.l-loading').removeClass('hide-alt'),
                                  l('.outer-load')
                                      .eq(1)
                                      .css({
                                          right: 'auto',
                                          left: r + a + 'px',
                                      }),
                                  localStorage.removeItem('page');
                          }, 1300);
                  }, 0)
                : l('.l-loading').removeClass('show show-darkgray'),
            l('.outer-load').css('height', '0'),
            (s = l('#newsletter-subscribe').length ? l('#newsletter-subscribe').outerHeight() : 0),
            (e = s + t + 100),
            1025 < n && i.css('margin-bottom', t + 'px'),
            setTimeout(function () {
                i.addClass('fade-lines');
            }, 400);
        var p,
            h,
            f,
            w,
            g,
            v = !0;

        function b(e, t, o) {
            setTimeout(function () {
                e.classList.add('show');
            }, o * t);
        }
            
            l('a').on('click', function (e) {
                var t = l(this).attr('href');
                var h = l(this).attr('data-fancybox');
                '' == h ||
                t.includes('javascript:;') ||
                    '' == t ||
                    t.includes('#') ||
                    t.includes('tel:') ||
                    t.includes('mob:') ||
                    t.includes('mailto:') ||
                    t.includes('file:') ||
                    t.includes('fax:') ||
                    (e.preventDefault(),
                    v &&
                        ((v = !1),
                        l(this).attr('data-href-title') && l(this).attr('data-href-title'),
                        localStorage.setItem('page', 'true'),
                        l('.vert-loader').addClass('show active'),
                        l('.l-loading').addClass('show show-darkgray'),
                        setTimeout(function () {
                            window.location = t;
                        }, 900)));
            }),
            l(window).on('popstate', function (e) {
                var t;
                e.preventDefault(),
                    v &&
                        ((v = !1),
                        localStorage.setItem('page', 'true'),
                        console.log('loading..'),
                        console.log(window.history),
                        (t = null !== window.history.state ? window.history.state.href : ''),
                        l('.vert-loader').addClass('show active'),
                        l('.l-loading').addClass('show show-darkgray'),
                        setTimeout(function () {
                            window.location = t;
                        }, 500));
            });

    })





    



   
