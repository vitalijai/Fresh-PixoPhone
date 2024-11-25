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
          const status = this.getStatusClass(i)
  
          node += '<div class="node '+ statusClass[status] +'"  data-day="'+ i +'">';
          node += '<div class="number">'+ i +'</div>';
          if (status === 3) {
            node += '<div class="cover js-cover"><div class="number">'+ i +'</div></div>';
          }
          if(status === 1) {
            node += '<button class="button expired-btn js-expired disabled">Отримано</button>';
          } else if (status === 3 || status === 2) {
            node += '<button class="button get-btn js-get-code" data-id="'+ i +'">Отримати</button>';
          }
         
          node += '</div>';
        }
  
        return node
      },
  
      copy(selector) {
        var $temp = $("<div>");
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
  
      actions() {
        $('body').on('click touch', '.js-cover', function() {
          $(this).parent().addClass('open')
        });

        $('body').on('click', '.js-get-code', function() {
            curentNode = $(this).parents('.node').data('day')

            $('#active-event').modal('show', {
                id: curentNode
            });
        });

        $('body').on('click', '.js-expired', function() {
            $('#expired-event').modal('show');
        })

        $('body').on('click', '.node.unavailable', function() {
            $('#future-event').modal('show');
        });
  
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
  
          $('.js-active-event-block').addClass('hidden');
          $('.js-active-event-success-block').removeClass('hidden');

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
  
        $('body').on('submit', '#event-subscribe-form', function(event) {
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
            success: function() {
              $('.js-subscribe-event-block').addClass('hidden');
              $('.js-subscribe-event-success-block').removeClass('hidden');
  
              $(this).trigger("reset")
            },
            error: function(jqXHR, textStatus, errorThrown) {
  
            }
          });
        });
      },
  
      initCalendar() {
          if(container) {
            const nodes = this.build();

            container.html(nodes)

            //   container.find('.node').map((i, node) => {
            //       const status = this.getStatusClass(i + 1);
        
            //       $(node).removeClass('unavailable received available active').addClass(statusClass[status])
            //   });
          }
      },
  
      init() {
          this.actions();
          this.initCalendar();
      }
    }
  })();

  $(document).ready(() => {
    Calendar.init();
})