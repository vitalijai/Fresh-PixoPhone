$(document).ready(function () {
  if ($(window).width() > 719) {
    $(".catalog-filters-viewed-dropdown").each(function () {
      var $this = $(this);
      var $liElements = $this.find(".viewed-dropdown-specs-li");
      var $moreButton = $this.find(".viewed-dropdown-specs-snow-more");

      // Проверка, если li больше 7
      if ($liElements.length > 7) {
        // Скрытие всех элементов после 7-го
        $liElements.slice(7).hide();

        // Показ кнопки "Показать больше"
        $moreButton.show();

        // Обработчик события нажатия на кнопку
        $moreButton.on("click", function () {
          // Показ скрытых элементов с анимацией
          $liElements.slice(7).slideDown();
          // Скрытие кнопки после нажатия
          $moreButton.hide();
        });
      } else {
        // Если элементов 7 или меньше, скрываем кнопку "Показать больше"
        $moreButton.hide();
      }
    });

    $(".catalog-filters-viewed-container").hover(
      function () {
        // Проверяем, есть ли у текущего элемента или его предков класс `catalog-filters-viewed-content list-view-bu`
        if (
          $(this).hasClass("catalog-filters-viewed-content") ||
          $(this).closest(".catalog-filters-viewed-content.list-view-bu")
            .length > 0
        ) {
          return; // Выходим из функции, если условие выполнено
        }

        // Проверяем, есть ли внутри текущего элемента блок с классом .catalog-filters-viewed-dropdown
        var dropdown = $(this).find(".catalog-filters-viewed-dropdown");
        if (dropdown.length > 0) {
          // Плавно показываем dropdown при наведении
          dropdown.stop(true, true).slideDown(300).css("display", "flex");
        }
      },
      function () {
        // Проверяем, есть ли у текущего элемента или его предков класс `catalog-filters-viewed-content list-view-bu`
        if (
          $(this).hasClass("catalog-filters-viewed-content") ||
          $(this).closest(".catalog-filters-viewed-content.list-view-bu")
            .length > 0
        ) {
          return; // Выходим из функции, если условие выполнено
        }

        // Проверяем, есть ли внутри текущего элемента блок с классом .catalog-filters-viewed-dropdown
        var dropdown = $(this).find(".catalog-filters-viewed-dropdown");
        if (dropdown.length > 0) {
          // Плавно скрываем dropdown, когда курсор уходит
          dropdown.stop(true, true).slideUp(300);
        }
      }
    );

    $(".catalog-filters-viewed-container-bu").hover(
      function () {
        // При наведении на .catalog-filters-viewed-container-bu
        $(this)
          .find(".catalog-filters-viewed-container-dropdown")
          .stop(true, true)
          .slideDown(300)
          .css("display", "flex");
      },
      function () {
        // При уходе курсора с .catalog-filters-viewed-container-bu
        $(this)
          .find(".catalog-filters-viewed-container-dropdown")
          .stop(true, true)
          .slideUp(300);
      }
    );
    // Обработчик клика для элемента filters-left-header-span-value
    $(".filters-left-header-span-value").click(function () {
      // Переключаем класс 'open' у нажатого элемента
      $(this).toggleClass("open");

      // Находим соседний контейнер и переключаем его видимость с анимацией
      $(".catalog-filters-left-header-bottom-container").slideToggle();
    });
  }
});
// var container = $(
//   ".catalog-filters-viewed-content.grid-view, .catalog-filters-viewed-content.more-grid-view, .catalog-filters-viewed-content.more-grid-view-bu"
// );
// var items = container.find(".catalog-filters-viewed-container");

// items.each(function (index) {
//   if ((index + 1) % 8 === 0) {
//     // Создаем новый баннер блок
//     var bannerBlock = $(
//       '<a href="#" class="catalog-filters-viewed-container global-block-container baner"></a>'
//     );

//     // Определяем случайную позицию внутри текущих 7 блоков
//     var randomPosition = Math.floor(Math.random() * 8);
//     var targetBlock = items.eq(index - randomPosition);

//     // Вставляем баннер блок перед случайным элементом
//     bannerBlock.insertBefore(targetBlock);
//   }
// });

// function insertBannerMoreBlocks(container, itemSelector, bannerClass) {
//   var items = container.find(itemSelector);

//   items.each(function (index) {
//     if ((index + 1) % 8 === 0) {
//       // Создаем новый баннер блок
//       var bannerBlock = $(
//         '<a href="#" class="catalog-filters-viewed-container global-block-container baner"></a>'
//       );

//       // Определяем случайную четную позицию внутри текущих 4 блоков
//       var evenPositions = [0, 2]; // Возможные четные позиции (0 и 2 для 4 блоков)
//       var randomPosition =
//         evenPositions[Math.floor(Math.random() * evenPositions.length)];

//       // Определяем целевой блок для вставки баннера
//       var targetBlock = items.eq(index - randomPosition);

//       // Вставляем баннер блок после целевого элемента
//       bannerBlock.insertAfter(targetBlock);
//     }
//   });
// }

// Вызов функции для контейнеров
// insertBannerMoreBlocks(
//   $(
//     ".catalog-filters-viewed-content.grid-view, .catalog-filters-viewed-content.more-grid-view, .catalog-filters-viewed-content.more-grid-view-bu"
//   ),
//   ".catalog-filters-viewed-container",
//   "catalog-filters-viewed-container-baner"
// );

// function insertBannerListBlocks(container, itemSelector, bannerClass) {
//   var items = container.find(itemSelector);

//   items.each(function (index) {
//     if ((index + 1) % 4 === 0) {
//       // Создаем новый баннер блок
//       var bannerBlock = $(
//         '<div class="' +
//           bannerClass +
//           '"><img src="/images/no_img-2.png" alt="baner"></div>'
//       );

//       // Определяем случайную четную позицию внутри текущих 4 блоков
//       var evenPositions = [0, 2]; // Возможные четные позиции (0 и 2 для 4 блоков)
//       var randomPosition =
//         evenPositions[Math.floor(Math.random() * evenPositions.length)];

//       // Определяем целевой блок для вставки баннера
//       var targetBlock = items.eq(index - randomPosition);

//       // Вставляем баннер блок после целевого элемента
//       bannerBlock.insertAfter(targetBlock);
//     }
//   });
// }

// Вызов функции для контейнеров
// insertBannerListBlocks(
//   $(".catalog-filters-viewed-content.list-view"),
//   ".catalog-filters-viewed-container",
//   "catalog-filters-viewed-container-baner"
// );
// insertBannerListBlocks(
//   $(".catalog-filters-viewed-content.list-view-bu"),
//   ".catalog-filters-viewed-container-bu",
//   "catalog-filters-viewed-container-baner"
// );

$(document).ready(function () {
  // Сохраняем оригинальный текст в data-атрибут
  $(".catalog-filters-viewed-content .global-button button").each(function () {
    if (!this.dataset.originalText) {
      this.dataset.originalText = this.textContent;
    }
  });
});

$(".header-right-filters .view-block").on("click", function () {
  // Удаляем класс 'active' у всех кнопок
  $(".header-right-filters .view-block").removeClass("active");

  // Добавляем класс 'active' к нажатой кнопке
  $(this).addClass("active");

  // Определяем класс нажатой кнопки
  var newClass = "";
  if ($(this).hasClass("grid-view")) {
    newClass = "grid-view";
  } else if ($(this).hasClass("list-view")) {
    newClass = "list-view";
  } else if ($(this).hasClass("grid-view-bu")) {
    newClass = "grid-view-bu";
  } else if ($(this).hasClass("more-grid-view")) {
    newClass = "more-grid-view";
  } else if ($(this).hasClass("list-view-bu")) {
    newClass = "list-view-bu";
  } else if ($(this).hasClass("more-grid-view-bu")) {
    newClass = "more-grid-view-bu";
  }

  // Меняем класс у элемента с классом catalog-filters-viewed-content
  var $catalogContent = $(
    ".catalog-filters-viewed-content.grid-view,.catalog-filters-viewed-content.more-grid-view-bu,.catalog-filters-viewed-content.grid-view-bu,.catalog-filters-viewed-content.more-grid-view,.catalog-filters-viewed-content.list-view "
  );
  var $catalogContentList = $(".catalog-filters-viewed-content.list-view-bu");
  if (newClass === "list-view-bu") {
    $catalogContent.hide();
    $catalogContentList.show();
  } else {
    $catalogContent
      .removeClass(
        "grid-view grid-view-bu list-view more-grid-view more-grid-view-bu"
      )
      .addClass(newClass);
    $catalogContent.show();
  }

  // Удаляем существующие баннеры перед добавлением новых
  $catalogContent.find(".catalog-filters-viewed-container-baner").remove();
  $catalogContent
    .find(".global-block-container.banner, .global-block-container.fill")
    .remove();

  // Если класс more-grid-view или more-grid-view-bu, очищаем текст внутри кнопок
  if (newClass === "more-grid-view") {
    var $buttonsMoreGrid = $catalogContent.find(".global-button button");
    $buttonsMoreGrid.each(function () {
      // Сохраняем оригинальный текст, если он не был сохранен ранее
      if (!this.dataset.originalText) {
        this.dataset.originalText = this.textContent;
      }
      this.textContent = ""; // Очищаем текст внутри кнопки
    });

    insertBannerMoreBlocks(
      $catalogContent,
      ".catalog-filters-viewed-container",
      "catalog-filters-viewed-container-baner"
    );
  } else if (newClass === "more-grid-view-bu") {
    var $buttonsMoreGrid = $catalogContent.find(".global-button button");
    $buttonsMoreGrid.each(function () {
      // Сохраняем оригинальный текст, если он не был сохранен ранее
      if (!this.dataset.originalText) {
        this.dataset.originalText = this.textContent;
      }
      this.textContent = ""; // Очищаем текст внутри кнопки
    });

    insertBannerMoreBlocks(
      $catalogContent,
      ".catalog-filters-viewed-container",
      "catalog-filters-viewed-container-baner"
    );

    $catalogContentList.hide();
  } else {
    // Восстанавливаем текст внутри кнопок, если класс не more-grid-view
    $catalogContent.find(".global-button button").each(function () {
      if (this.dataset.originalText) {
        this.textContent = this.dataset.originalText;
      }
    });

    // Вызываем соответствующую функцию для добавления баннеров
    if (newClass === "grid-view") {
      insertBannerMoreBlocks(
        $catalogContent,
        ".catalog-filters-viewed-container",
        "catalog-filters-viewed-container-baner"
      );

      if ($(window).width() < 719) {
        var $buttonsMoreGrid = $catalogContent.find(".global-button button");
        $buttonsMoreGrid.each(function () {
          // Сохраняем оригинальный текст, если он не был сохранен ранее
          if (!this.dataset.originalText) {
            this.dataset.originalText = this.textContent;
          }
          this.textContent = ""; // Очищаем текст внутри кнопки
        });
      }
    } else if (newClass === "grid-view-bu") {
      insertBannerMoreBlocks(
        $catalogContent,
        ".catalog-filters-viewed-container",
        "catalog-filters-viewed-container-baner"
      );
      $catalogContentList.hide();
    } else if (newClass === "list-view") {
      insertBannerListBlocks(
        $catalogContent,
        ".catalog-filters-viewed-container",
        "catalog-filters-viewed-container-baner"
      );
    } else if (newClass === "list-view-bu") {
      insertBannerListBlocks(
        $catalogContent,
        ".catalog-filters-viewed-container-bu",
        "catalog-filters-viewed-container-baner"
      );
    }
  }
});

function insertBannerListBlocks(container, itemSelector, bannerClass) {
  var items = container.find(itemSelector);

  items.each(function (index) {
    if ((index + 1) % 4 === 0) {
      // Создаем новый баннер блок
      var bannerBlock = $(
        '<div class="' +
          bannerClass +
          '"><img src="/images/no_img-2.png" alt="banner"></div>'
      );

      // Определяем случайную четную позицию внутри текущих 4 блоков
      var evenPositions = [0, 2]; // Возможные четные позиции (0 и 2 для 4 блоков)
      var randomPosition =
        evenPositions[Math.floor(Math.random() * evenPositions.length)];

      // Определяем целевой блок для вставки баннера
      var targetBlock = items.eq(index - randomPosition);

      // Вставляем баннер блок после целевого элемента
      bannerBlock.insertAfter(targetBlock);
    }
  });
}

function insertBannerMoreBlocks(container, itemSelector, bannerClass) {
  var items = container.find(itemSelector);

  items.each(function (index) {
    if ((index + 1) % 8 === 0) {
      // Создаем новый баннер блок
      var bannerBlock = $(
        '<a href="#" class="catalog-filters-viewed-container global-block-container banner"></a>'
        // '<div class="catalog-filters-viewed-container global-block-container fill"></div>'
      );

      // Определяем случайную четную позицию внутри текущих 8 блоков
      var evenPositions = [0, 2]; // Возможные четные позиции (0 и 2 для 4 блоков)
      var randomPosition =
        evenPositions[Math.floor(Math.random() * evenPositions.length)];

      // Определяем целевой блок для вставки баннера
      var targetBlock = items.eq(index - randomPosition);

      // Вставляем баннер блок после целевого элемента
      bannerBlock.insertAfter(targetBlock);
    }
  });
}
