$(".offers-page-header-view-block button").click(function () {
  // Проверяем состояние чекбокса
  if (
    $(".offers-page-switch-compare-guarantee input[type='checkbox']").is(
      ":checked"
    )
  ) {
    // Если чекбокс активен, снимаем его отметку
    $(".offers-page-switch-compare-guarantee input[type='checkbox']").prop(
      "checked",
      false
    );
  }

  // Удаляем класс 'active' у всех кнопок внутри '.offers-page-header-view-block'
  $(".offers-page-header-view-block button").removeClass("active");
  // Убираем класс 'active' у блока сравнения
  $(".offers-page-block__comparison").removeClass("active");
  // Добавляем класс 'active' только к текущей нажатой кнопке
  $(this).addClass("active");

  // Проверяем, какая кнопка активна
  if ($(this).hasClass("list-view")) {
    // Если активна кнопка с классом 'list-view', делаем '.offers-page-block__list' активным
    $(".offers-page-block__list").addClass("active");
    $(".offers-page-block__column").removeClass("active");
  } else if ($(this).hasClass("grid-view")) {
    // Если активна кнопка с классом 'grid-view', делаем '.offers-page-block__column' активным
    $(".offers-page-block__column").addClass("active");
    $(".offers-page-block__list").removeClass("active");
  }
});

$(".offers-page-header-switch-compare-block input[type='checkbox']").change(
  function () {
    // Проверяем состояние чекбокса
    if ($(this).is(":checked")) {
      // Если чекбокс отмечен, убираем класс 'active' у всех блоков
      $(
        ".offers-page-block__list, .offers-page-block__column, .offers-page-block__comparison"
      ).removeClass("active");

      // Добавляем класс 'active' к блоку сравнения
      $(".offers-page-block__comparison").addClass("active");
      const comparisonBlock = $(".offers-page-block__comparison");

      let tabsCount;
      if (comparisonBlock.length) {
        tabsCount = comparisonBlock.find(".offers-page-block__tabs").length;
      }
      const comparisonCarusel = $(".offers-page-block__comparison-gen-carusel");
      if (comparisonCarusel.length) {
        const tabsCover = comparisonCarusel.find(
          ".offers-page-block__tabs-cover"
        );
        if (tabsCover.length) {
          const comparisonWith = $(".content-container");
          const ta = $(".offers-page-block__tabs");
          const taWith = ta.width();
          const caruselWidth = comparisonWith.width();
          const newWidth = caruselWidth - tabsCount * taWith - tabsCount; // вычитаем три блока по 248px
          const splideWitdh = caruselWidth - taWith;
          tabsCover.css("width", newWidth + "px");

          // Проверяем, если tabsCount больше 4, то добавляем класс splide
          if (tabsCount > 5) {
            $(".offers-page-block__comparison-gen-carusel").addClass("splide");
            tabsCover.css("display", "none");
            $(".offers-page-block__tabs-fade").css("display", "block");
            $(".offers-page---item").css("margin-left", "0");

            var offersSlider = new Splide("#offers-gen-carusel", {
              pagination: false,
              arrows: true,
              fixedWidth: taWith + "px",
              width: splideWitdh,
              gap: "1px",
              perPage: 3,
            });
            offersSlider.mount();
          }
        }
      }
    } else {
      // Если чекбокс не отмечен, возвращаем класс 'active' последнему активному блоку
      if (
        $(".offers-page-header-view-block button.list-view").hasClass("active")
      ) {
        $(".offers-page-block__list").addClass("active");
      } else if (
        $(".offers-page-header-view-block button.grid-view").hasClass("active")
      ) {
        $(".offers-page-block__column").addClass("active");
      }

      // Убираем класс 'active' у блока сравнения
      $(".offers-page-block__comparison").removeClass("active");
    }
  }
);
// При клике на .filter.BTN открываем offers-filter-options и добавляем/убираем класс active
$(".filter.BTN").click(function () {
  var $parentBlock = $(this).closest(".offers-page-header-sorting-block");
  $parentBlock.find(".offers-page-header-filter-block").toggleClass("active");

  // Показываем .offers-filter-options без изменения свойства display
  $parentBlock
    .find(".offers-filter-options")
    .stop(true, true)
    .slideDown(300)
    .css("display", "flex");
});

// При клике на .filter.cancellation убираем класс active и скрываем offers-filter-options
$(".filter.cancellation").click(function () {
  var $parentBlock = $(this).closest(".offers-page-header-sorting-block");
  $parentBlock.find(".offers-page-header-filter-block").removeClass("active");

  // Останавливаем анимацию и скрываем .offers-filter-options
  $parentBlock.find(".offers-filter-options").stop(true, true).slideUp(300);

  // Убираем класс active у .filter.BTN
  $parentBlock.find(".filter.BTN").removeClass("active");
});

// При клике на .filter.apply убираем класс active и скрываем offers-filter-options
$(".filter.apply").click(function () {
  var $parentBlock = $(this).closest(".offers-page-header-sorting-block");
  $parentBlock.find(".offers-page-header-filter-block").removeClass("active");

  // Останавливаем анимацию и скрываем .offers-filter-options
  $parentBlock.find(".offers-filter-options").stop(true, true).slideUp(300);

  // Добавляем класс active к .filter.BTN
  $parentBlock.find(".filter.BTN").addClass("active");
});

// Обработчик клика для кнопки "Сортувати"
$(".sorting.BTN.selected").on("click", function () {
  var $this = $(this);
  var $headerBlock = $this.closest(".offers-page-header-sorting-block");

  // Проверка наличия класса 'active'
  if ($this.hasClass("active")) {
    // Возвращение всех блоков в исходное состояние
    $headerBlock.removeClass("active");
    $headerBlock
      .find(".sorting")
      .removeClass("active selected")
      .css("display", "");

    // Кнопка "Сортувати" получает класс 'selected'
    $this.addClass("selected");
  } else {
    // Добавление класса 'active' к кнопке "Сортувати" и div
    $this.addClass("active");
    $headerBlock.addClass("active");
  }
});

// Обработчик клика для кнопок сортировки
$(".sorting:not(.BTN)").on("click", function () {
  var $this = $(this);
  var $headerBlock = $this.closest(".offers-page-header-sorting-block");

  // Проверка наличия класса 'selected' у нажатой кнопки
  if ($this.hasClass("selected")) {
    // Возвращение всех блоков в исходное состояние
    $headerBlock
      .find(".sorting.BTN.selected")
      .removeClass("active")
      .addClass("selected")
      .css("display", "inline-flex");
    $headerBlock.addClass("active");
    $headerBlock
      .find(".sorting:not(.BTN)")
      .removeClass("selected")
      .css("display", "inline-flex");

    // Добавление класса 'active' к кнопке "Сортувати"
    $headerBlock.find(".sorting.BTN.selected").addClass("active");
  } else {
    // Удаление класса 'active' у кнопки "Сортувати" и скрытие её
    $headerBlock
      .find(".sorting.BTN.selected")
      .removeClass("active")
      .css("display", "none");
    $headerBlock.removeClass("active");

    // Удаление класса 'selected' у всех кнопок сортировки и скрытие их
    $headerBlock
      .find(".sorting:not(.BTN)")
      .removeClass("selected")
      .css("display", "none");

    // Добавление класса 'selected' к нажатой кнопке и отображение её
    $this.addClass("selected").css("display", "inline-flex");
  }
});

const switches = document.querySelectorAll(
  ".offers-page-buy-guarantee-switch-compare"
);

switches.forEach(function (switchElement) {
  switchElement.addEventListener("change", function () {
    const parent = switchElement.closest(".offers-page-buy-header");
    const guarantee = parent.querySelector(".offers-page-buy-guarantee");
    const bottom = parent.querySelector(".gen-tab__info-list-guaran");

    const guaranteeContent = guarantee.innerHTML;
    const bottomContent = bottom.innerHTML;

    if (switchElement.checked) {
      bottom.innerHTML = guaranteeContent;
      guarantee.innerHTML = bottomContent;
    } else {
      bottom.innerHTML = guaranteeContent;
      guarantee.innerHTML = bottomContent;
    }
  });
});

$(document).on("click", function (event) {
  const $target = $(event.target);

  // Проверяем, находится ли клик внутри элементов, которые должны оставаться открытыми
  const isInsideFilter =
    $target.closest(".catalog-filters-left.pop-up, .arrow-filters, .filter.BTN")
      .length > 0;

  if (!isInsideFilter) {
    // Закрываем фильтры и восстанавливаем исходные стили
    $(".arrow-filters").removeClass("active");
    $(".catalog-filters-left.pop-up").removeClass("active");
    $(".back-to-top").removeClass("mobile");
    $("html").removeClass("no-scroll");
    $(".screen").removeClass("overflow");
  }
});

// Сохраните предыдущий код для обработки кликов по кнопке
$(".arrow-filters").on("click", function (event) {
  // event.stopPropagation(); // Останавливаем дальнейшее распространение события
  $(this).toggleClass("active");
  $(".catalog-filters-left.pop-up").toggleClass("active");
  $(".back-to-top").toggleClass("mobile");
  $("html").toggleClass("no-scroll");
  $(".screen").toggleClass("overflow");
});

// Открытие окна offers-tab с плавным появлением
$(".global-button-bu_name").on("click", function () {
  $(".offers-tab").fadeIn(); // Плавное появление окна
  $("html").addClass("no-scroll");
  $(".screen").addClass("overflow");
  $(".screen.overflow").css("z-index", "22");
});
// Открытие окна offers-tab с плавным появлением
$(".global-button-bu_name").on("click", function () {
  $(".offers-tab").fadeIn(); // Плавное появление окна
  $("html").addClass("no-scroll");
  $(".screen").addClass("overflow");
  $(".screen.overflow").css("z-index", "22");
});

// Закрытие окна offers-tab с плавным исчезновением по нажатию на global-pop-up-close
$(".offers-tab").on("click", ".global-pop-up-close", function () {
  $(this).closest(".offers-tab").fadeOut(); // Плавное исчезновение окна
  $("html").removeClass("no-scroll");
  $(".screen").removeClass("overflow");
});

// Закрытие окна по нажатию вне offers-tab, только внутри offers-tab
$(".offers-tab").on("click", function (e) {
  if ($(e.target).is(".offers-tab")) {
    $(this).fadeOut(); // Плавное исчезновение окна
    $("html").removeClass("no-scroll");
    $(".screen").removeClass("overflow");
  }
});

// // Функция для инициализации и синхронизации слайдеров на основе шаблона ID
function initializeAndSyncSliders() {
  // Находим все основные слайдеры
  var mainSliders = document.querySelectorAll(".bu-main-photo-slider");

  mainSliders.forEach(function (mainElement) {
    // Извлекаем идентификатор из ID основного слайдера
    var mainId = mainElement.id;
    var identifier = mainId.replace("bu-main-photo-slider-", "");

    // Находим соответствующий вторичный слайдер с использованием идентификатора
    var secondaryId = "bu-secondary-slider-" + identifier;
    var secondaryElement = document.getElementById(secondaryId);

    if (secondaryElement) {
      // Инициализируем основной слайдер
      var mainSplide = new Splide(mainElement, {
        pagination: false,
        arrows: false,
      });

      // Инициализируем вторичный слайдер
      var secondarySplide = new Splide(secondaryElement, {
        fixedWidth: 80,
        height: 80,
        gap: 8,
        pagination: false,
        arrows: false,
        isNavigation: true,
        drag: false,
      });

      // Синхронизируем основной слайдер с соответствующим вторичным слайдером
      mainSplide.sync(secondarySplide);

      // Монтируем слайдеры только после синхронизации
      mainSplide.mount();
      secondarySplide.mount();
    }
  });
}

initializeAndSyncSliders();

//Zoom
(function ($) {
  $(document).ready(function () {
    $(".cloud-zoom, .cloud-zoom-gallery").CloudZoom();
  });

  function format(str) {
    for (var i = 1; i < arguments.length; i++) {
      str = str.replace("%" + (i - 1), arguments[i]);
    }
    return str;
  }

  function CloudZoom(jWin, opts) {
    var sImg = $("img", jWin);
    var img1;
    var img2;
    var zoomDiv = null;
    var $mouseTrap = null;
    var lens = null;
    var $tint = null;
    var softFocus = null;
    var $ie6Fix = null;
    var zoomImage;
    var controlTimer = 0;
    var cw, ch;
    var destU = 0;
    var destV = 0;
    var currV = 0;
    var currU = 0;
    var filesLoaded = 0;
    var mx, my;
    var ctx = this,
      zw;
    // Display an image loading message. This message gets deleted when the images have loaded and the zoom init function is called.
    // We add a small delay before the message is displayed to avoid the message flicking on then off again virtually immediately if the
    // images load really fast, e.g. from the cache.
    //var	ctx = this;
    setTimeout(function () {
      //						 <img src="/images/loading.gif"/>
      if ($mouseTrap === null) {
        var w = jWin.width();
        jWin
          .parent()
          .append(
            format(
              '<div style="width:%0px;position:absolute;top:75%;left:%1px;text-align:center" class="cloud-zoom-loading" >Loading...</div>',
              w / 3,
              w / 2 - w / 6
            )
          )
          .find(":last")
          .css("opacity", 0.5);
      }
    }, 200);

    var ie6FixRemove = function () {
      if ($ie6Fix !== null) {
        $ie6Fix.remove();
        $ie6Fix = null;
      }
    };

    // Removes cursor, tint layer, blur layer etc.
    this.removeBits = function () {
      //$mouseTrap.unbind();
      if (lens) {
        lens.remove();
        lens = null;
      }
      if ($tint) {
        $tint.remove();
        $tint = null;
      }
      if (softFocus) {
        softFocus.remove();
        softFocus = null;
      }
      ie6FixRemove();

      $(".cloud-zoom-loading", jWin.parent()).remove();
    };

    this.destroy = function () {
      jWin.data("zoom", null);

      if ($mouseTrap) {
        $mouseTrap.unbind();
        $mouseTrap.remove();
        $mouseTrap = null;
      }
      if (zoomDiv) {
        zoomDiv.remove();
        zoomDiv = null;
      }
      //ie6FixRemove();
      this.removeBits();
      // DON'T FORGET TO REMOVE JQUERY 'DATA' VALUES
    };

    // This is called when the zoom window has faded out so it can be removed.
    this.fadedOut = function () {
      if (zoomDiv) {
        zoomDiv.remove();
        zoomDiv = null;
      }
      this.removeBits();
      //ie6FixRemove();
    };

    this.controlLoop = function () {
      if (lens) {
        var x = (mx - sImg.offset().left - cw * 0.5) >> 0;
        var y = (my - sImg.offset().top - ch * 0.5) >> 0;

        if (x < 0) {
          x = 0;
        } else if (x > sImg.outerWidth() - cw) {
          x = sImg.outerWidth() - cw;
        }
        if (y < 0) {
          y = 0;
        } else if (y > sImg.outerHeight() - ch) {
          y = sImg.outerHeight() - ch;
        }

        lens.css({
          left: x,
          top: y,
        });
        lens.css("background-position", -x + "px " + -y + "px");

        destU = ((x / sImg.outerWidth()) * zoomImage.width) >> 0;
        destV = ((y / sImg.outerHeight()) * zoomImage.height) >> 0;
        currU += (destU - currU) / opts.smoothMove;
        currV += (destV - currV) / opts.smoothMove;

        zoomDiv.css(
          "background-position",
          -(currU >> 0) + "px " + (-(currV >> 0) + "px")
        );
      }
      controlTimer = setTimeout(function () {
        ctx.controlLoop();
      }, 30);
    };

    this.init2 = function (img, id) {
      filesLoaded++;
      //console.log(img.src + ' ' + id + ' ' + img.width);
      if (id === 1) {
        zoomImage = img;
      }
      //this.images[id] = img;
      if (filesLoaded === 2) {
        this.init();
      }
    };

    /* Init function start.  */
    this.init = function () {
      // Remove loading message (if present);
      $(".cloud-zoom-loading", jWin.parent()).remove();

      /* Add a box (mouseTrap) over the small image to trap mouse events.
             It has priority over zoom window to avoid issues with inner zoom.
             We need the dummy background image as IE does not trap mouse events on
             transparent parts of a div.
             */
      $mouseTrap = jWin
        .parent()
        .append(
          format(
            "<div class='mousetrap' style='background-image:url(\"" +
              opts.transparentImage +
              "\");z-index:999;position:absolute;width:%0px;height:%1px;left:%2px;top:%3px;'></div>",
            sImg.outerWidth(),
            sImg.outerHeight(),
            0,
            0
          )
        )
        .find(":last");

      //////////////////////////////////////////////////////////////////////
      /* Do as little as possible in mousemove event to prevent slowdown. */
      $mouseTrap.bind("mousemove", this, function (event) {
        // Just update the mouse position
        mx = event.pageX;
        my = event.pageY;
      });
      //////////////////////////////////////////////////////////////////////
      $mouseTrap.bind("mouseleave", this, function (event) {
        jWin.trigger("cloudzoom_end_zoom");
        clearTimeout(controlTimer);
        //event.data.removeBits();
        if (lens) {
          lens.fadeOut(299);
        }
        if ($tint) {
          $tint.fadeOut(299);
        }
        if (softFocus) {
          softFocus.fadeOut(299);
        }
        zoomDiv.fadeOut(300, function () {
          ctx.fadedOut();
        });
        return false;
      });
      //////////////////////////////////////////////////////////////////////
      $mouseTrap.bind("mouseenter", this, function (event) {
        jWin.trigger("cloudzoom_start_zoom");
        mx = event.pageX;
        my = event.pageY;
        zw = event.data;
        if (zoomDiv) {
          zoomDiv.stop(true, false);
          zoomDiv.remove();
        }

        var xPos = opts.adjustX,
          yPos = opts.adjustY;

        var siw = sImg.outerWidth();
        var sih = sImg.outerHeight();

        var w = opts.zoomWidth;
        var h = opts.zoomHeight;
        if (opts.zoomWidth == "auto") {
          w = siw;
        }
        if (opts.zoomHeight == "auto") {
          h = sih;
        }
        //$('#info').text( xPos + ' ' + yPos + ' ' + siw + ' ' + sih );
        var appendTo = jWin.parent(); // attach to the wrapper
        switch (opts.position) {
          case "top":
            yPos -= h; // + opts.adjustY;
            break;
          case "right":
            xPos += siw; // + opts.adjustX;
            break;
          case "bottom":
            yPos += sih; // + opts.adjustY;
            break;
          case "left":
            xPos -= w; // + opts.adjustX;
            break;
          case "inside":
            w = siw;
            h = sih;
            break;
          // All other values, try and find an id in the dom to attach to.
          default:
            appendTo = $("#" + opts.position);
            // If dom element doesn't exit, just use 'right' position as default.
            if (!appendTo.length) {
              appendTo = jWin;
              xPos += siw; //+ opts.adjustX;
              yPos += sih; // + opts.adjustY;
            } else {
              w = appendTo.innerWidth();
              h = appendTo.innerHeight();
            }
        }

        zoomDiv = appendTo
          .append(
            format(
              '<div id="cloud-zoom-big" class="cloud-zoom-big" style="display:none;position:absolute;left:%0px;top:%1px;width:%2px;height:%3px;background-image:url(\'%4\');z-index:99;"></div>',
              xPos,
              yPos,
              w,
              h,
              zoomImage.src
            )
          )
          .find(":last");

        // Add the title from title tag.
        if (sImg.attr("title") && opts.showTitle) {
          zoomDiv
            .append(
              format(
                '<div class="cloud-zoom-title">%0</div>',
                sImg.attr("title")
              )
            )
            .find(":last")
            .css("opacity", opts.titleOpacity);
        }

        // Fix ie6 select elements wrong z-index bug. Placing an iFrame over the select element solves the issue...
        var browserCheck = /(msie) ([\w.]+)/.exec(navigator.userAgent);
        if (browserCheck) {
          if (
            (browserCheck[1] || "") == "msie" &&
            (browserCheck[2] || "0") < 7
          ) {
            $ie6Fix = $('<iframe frameborder="0" src="#"></iframe>')
              .css({
                position: "absolute",
                left: xPos,
                top: yPos,
                zIndex: 99,
                width: w,
                height: h,
              })
              .insertBefore(zoomDiv);
          }
        }

        zoomDiv.fadeIn(500);

        if (lens) {
          lens.remove();
          lens = null;
        } /* Work out size of cursor */
        cw = (sImg.outerWidth() / zoomImage.width) * zoomDiv.width();
        ch = (sImg.outerHeight() / zoomImage.height) * zoomDiv.height();

        // Attach mouse, initially invisible to prevent first frame glitch
        lens = jWin
          .append(
            format(
              "<div class = 'cloud-zoom-lens' style='display:none;z-index:98;position:absolute;width:%0px;height:%1px;'></div>",
              cw,
              ch
            )
          )
          .find(":last");

        $mouseTrap.css("cursor", lens.css("cursor"));

        var noTrans = false;

        // Init tint layer if needed. (Not relevant if using inside mode)
        if (opts.tint) {
          lens.css("background", 'url("' + sImg.attr("src") + '")');
          $tint = jWin
            .append(
              format(
                '<div style="display:none;position:absolute; left:0px; top:0px; width:%0px; height:%1px; background-color:%2;" />',
                sImg.outerWidth(),
                sImg.outerHeight(),
                opts.tint
              )
            )
            .find(":last");
          $tint.css("opacity", opts.tintOpacity);
          noTrans = true;
          $tint.fadeIn(500);
        }
        if (opts.softFocus) {
          lens.css("background", 'url("' + sImg.attr("src") + '")');
          softFocus = jWin
            .append(
              format(
                '<div style="position:absolute;display:none;top:2px; left:2px; width:%0px; height:%1px;" />',
                sImg.outerWidth() - 2,
                sImg.outerHeight() - 2,
                opts.tint
              )
            )
            .find(":last");
          softFocus.css("background", 'url("' + sImg.attr("src") + '")');
          softFocus.css("opacity", 0.5);
          noTrans = true;
          softFocus.fadeIn(500);
        }

        if (!noTrans) {
          lens.css("opacity", opts.lensOpacity);
        }
        if (opts.position !== "inside") {
          lens.fadeIn(500);
        }

        // Start processing.
        zw.controlLoop();

        return; // Don't return false here otherwise opera will not detect change of the mouse pointer type.
      });
      jWin.trigger("cloudzoom_ready");
    };

    img1 = new Image();
    $(img1).load(function () {
      ctx.init2(this, 0);
    });
    img1.src = sImg.attr("src");

    img2 = new Image();
    $(img2).load(function () {
      ctx.init2(this, 1);
    });
    img2.src = jWin.attr("href");
  }

  $.fn.CloudZoom = function (options) {
    // IE6 background image flicker fix
    try {
      document.execCommand("BackgroundImageCache", false, true);
    } catch (e) {}
    this.each(function () {
      var relOpts, opts;
      // Hmm...eval...slap on wrist.
      eval("var	a = {" + $(this).attr("rel") + "}");
      relOpts = a;
      if ($(this).is(".cloud-zoom")) {
        opts = $.extend({}, $.fn.CloudZoom.defaults, options);
        opts = $.extend({}, opts, relOpts);

        $(this).css({
          position: "relative",
          display: "block",
        });
        $("img", $(this)).css({
          display: "block",
        });

        // Wrap an outer div around the link so we can attach things without them becoming part of the link.
        // But not if wrap already exists.
        if (!$(this).parent().hasClass("cloud-zoom-wrap") && opts.useWrapper) {
          $(this).wrap('<div class="cloud-zoom-wrap"></div>');
        }
        $(this).data("zoom", new CloudZoom($(this), opts));
      } else if ($(this).is(".cloud-zoom-gallery")) {
        opts = $.extend({}, relOpts, options);
        $(this).data("relOpts", opts);
        $(this).bind("click", $(this), function (event) {
          var data = event.data.data("relOpts");
          // Destroy the previous zoom
          $("#" + data.useZoom)
            .data("zoom")
            .destroy();
          // Change the biglink to point to the new big image.
          $("#" + data.useZoom).attr("href", event.data.attr("href"));
          // Change the small image to point to the new small image.
          $("#" + data.useZoom + " img").attr(
            "src",
            event.data.data("relOpts").smallImage
          );
          // Init a new zoom with the new images.
          $("#" + event.data.data("relOpts").useZoom).CloudZoom();

          return false;
        });
      }
    });
    return this;
  };

  $.fn.CloudZoom.defaults = {
    zoomWidth: "auto",
    zoomHeight: "auto",
    position: "inside",
    transparentImage: ".",
    useWrapper: true,
    tint: false,
    tintOpacity: 0.5,
    lensOpacity: 0.5,
    softFocus: false,
    smoothMove: 3,
    showTitle: true,
    titleOpacity: 0.5,
    adjustX: 0,
    adjustY: 0,
  };
})(jQuery);
