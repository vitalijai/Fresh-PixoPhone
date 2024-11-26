const Calendar = (function() {
    const calendarData = JSON.parse(localStorage.getItem('calendar')) || {};
    const currentDate = new Date().getDate();
    const isActive = new Date().getMonth() === 11;
  
    const container = $('.calendar');

    const statusClass = {
      0: 'unavailable',
      1: 'received',
      2: 'available',
      3: 'active'
    }

    let curentNode = null;
  
    return {
      getStatusClass(i) {
        let status = 0;

        if (isActive) {
            if (currentDate > i) {
              status = calendarData[i] ? 1 : 2
            } else if(currentDate === i) {
                status = calendarData[i] ? 1 : 3
            }
        }
  
        return status;
      },
  
      build() {
        let node = '';
  
        for (let i = 1; i < 26; i++) {
          const status = this.getStatusClass(i);
          const tooltip = status === 0 ? 'data-toggle="tooltip"' : '';
  
          node += '<button role="button" tabindex class="node '+ statusClass[status] +'"  data-day="'+ i +'" '+ tooltip +'>';
          node += '<div class="number">'+ i +'</div>';
          if (status === 3) {
            node += '<div class="cover js-cover"><div class="number">'+ i +'</div></div>';
          }
          if(status === 1) {
            node += '<div class="button expired-btn js-expired disabled">Отримано</div>';
          } else if (status === 3 || status === 2) {
            node += '<div class="button get-btn js-get-code">Отримати</div>';
          }
         
          node += '</button>';
        }
  
        return node
      },
  
      copy(selector) {
        const $temp = $("<div>");
        $("body").append($temp);
        $temp.attr("contenteditable", true)
             .html($(selector).html()).select()
             .on("focus", function() { document.execCommand('selectAll',false,null); })
             .focus();
        document.execCommand("copy");
        $temp.remove();
      },

      setData(index) {
        calendarData[index] = true;

        localStorage.setItem('calendar', JSON.stringify(calendarData));

        Calendar.initCalendar();
      },

      initTooltip(){
          $('[data-toggle="tooltip"]').tooltip({
            placement: 'bottom',
            container: 'body',
            trigger: 'focus',
            title: 'Упс, сьогодні інший день!<br> Не турбуйтеся, ми також часом плутаємо дати',
            html: true
          });

          $('[data-toggle="tooltip"]').on('shown.bs.tooltip', function () {
            setTimeout(() => {
              $(this).tooltip('hide')
            }, 4000);
          })
      },
  
      actions() {
        $('body').on('click touch', '.js-cover', function() {
          $(this).parent().addClass('open')
        });

        $('body').on('click', '.js-get-code', function() {
            curentNode = $(this).parents('.node').data('day');

            $('#active-event').modal('show');
        });

        $('body').on('click', '.js-expired', function() {
            $('#expired-event').modal('show');
        })
  
        $('body').on('click', '.js-copy', function() {
          Calendar.copy('.js-code')
        });

        $('#active-event').on('hidden.bs.modal', function (e) {
          $('.js-active-event-block').removeClass('hidden');
          $('.js-active-event-success-block').addClass('hidden');
        });
  
        $('#future-event').on('hidden.bs.modal', function (e) {
          $('.js-subscribe-event-block').removeClass('hidden');
          $('.js-subscribe-event-success-block').addClass('hidden');
        });

        $('body').on('submit', '#event-code-form', function(event) {
          event.preventDefault();
  
          const form = $(this).serializeArray();
          const formData = new FormData();
  
          form.forEach((field) => {
            formData.append(field.name, field.value);
          });

          $.ajax({
            url: '/get-code',
            type: 'POST',
            data: formData,
            success: function(response) {
              $('.js-active-event-block').addClass('hidden');
              $('.js-active-event-success-block').removeClass('hidden');
  
              $(this).trigger("reset")
  
              $('.js-code').html(response);

              Calendar.setData(curentNode)
            },
            error: function(jqXHR, textStatus, errorThrown) {
  
            }
          });
        });
      },
  
      initCalendar() {
          if(container) {
            const nodes = this.build();

            container.html(nodes);
          }
      },
  
      init() {
          this.actions();
          this.initCalendar();

          this.initTooltip();
      }
    }
  })();

  $(document).ready(() => {
    Calendar.init();
})