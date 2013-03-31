/*jshint strict:true, es5:true, forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, nonew:true, browser:true, devel:true, indent:2, boss:true, curly:false, immed:false, latedef:true, newcap:true, plusplus:false, trailing:true, maxparams:3, maxerr:100, debug:false, asi:false, evil:false, expr:true, eqnull:false, esnext:false, funcscope:false, globalstrict:false, loopfunc:false */
(function($,undefined){
  "use strict";

  /*// 1Devs piwik analytic for preview version
  var
  _paq = _paq || [],
  u = (("https:" === document.location.protocol) ? "https" : "http") + "://a.1dws.com/",
  d=document,
  g=d.createElement("script"),
  s=d.getElementsByTagName("script")[0];

  _paq.push(["setCookieDomain", "*.1dws.com"]);
  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);
  _paq.push(["setTrackerUrl", u+"piwik.php"]);
  _paq.push(["setSiteId", "18"]);

  g.type="text/javascript";
  g.defer=true;
  g.async=true;
  g.src=u+"piwik.js";
  s.parentNode.insertBefore(g,s);
  //*/

  var
  ie = (navigator.appVersion.indexOf("MSIE") !== -1) ? parseFloat(navigator.appVersion.split("MSIE")[1]) : 99,
  touch = "ontouchstart" in document.documentElement && !!(document.body.className += ' touch'),
  floor = Math.floor;

  $.fn.narcissusSkillBar = function(opt){
    this.each(function(){
      var
      that = this,
      $this = $(that),
      data  = $.extend({
        theme: 'default',
        width: 350,
        height: 200,
        barSpacing: 10
      }, opt, $this.data()),
      $bars = $('div[data-value]',this),
      bar_width = floor( (data.width-data.barSpacing) / $bars.length ) - data.barSpacing;

      $this
      .css({
        width: data.width,
        height: data.height
      });

      $bars.each(function(){
        var
        $bar = $(this),
        bardata = $.extend($bar.data(),{
          width: bar_width
        }),
        extcss = bardata.color[0]!=='#' ? {} : {
          backgroundColor: bardata.color
        },
        $title = $('<span>');

        bardata.value = parseInt(bardata.value,10);
        bardata.value = (!bardata.value || bardata.value<1) ? 1 :
                  bardata.value>100 ? 100 : bardata.value;
        bardata.height = floor( data.height * bardata.value / 100 );

        $title
        .append(bardata.value+'%');

        $bar
        .css($.extend({
          width: bardata.width,
          height: bardata.height,
          marginLeft: data.barSpacing,
          marginTop:  data.height - bardata.height
        },extcss))
        .append($title);
      });

    });
  }

  $(function(){
    $("[data-narcissus='skill-bar']").narcissusSkillBar();
  });

/*
    var graph_height = $('.graph-skill').height(),
      $graph_bars = $(".graph-skill li");

    $graph_bars.each(function(){
      var $this = $(this),
        $elm = $this.children("span.bar-title"),
        val = parseFloat($elm.text());

      val = (!val || val<1)  ? 1 :
        val>100 ? 100 : val;

      $this
        .css({
          'margin-top': graph_height*(100-val)/100,
          height: graph_height*val/100+'px'
        })
        .data('percentValue', val);

      $elm.html(val+"%");
    });

    // Custom page animations

    window.resumePageAnimate = function(){
      var dly=1;
      $graph_bars.each(function(){
        var $this=$(this),
          val = $this.data('percentValue'),
          scl = 0.2;
        $this
          .delay(dly)
          .animate({
            'margin-top': graph_height*(100-(val*scl))/100,
            height: graph_height*val*scl/100+'px'
          },200,'swing')
          .animate({
            'margin-top': graph_height*(100-val)/100,
            height: graph_height*val/100+'px'
          },300, 'swing');
        dly+=120;
      });
    };
*/

})(window.jQuery);
// })(window.Zepto);
//})(window.Zepto || window.jQuery);
