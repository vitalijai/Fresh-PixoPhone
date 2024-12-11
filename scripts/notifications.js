const Notifications = (() => {

    const container = $('#notifications');

    const timerDuration = 5000;

    let timer = null;

    return {
        showInfo(text) {
            this.showNotification('Інформування', text, 'info');
        },

        showDeleted(text) {
            this.showNotification('Додано до кошика', text, 'error');
        },

        showAdded(text) {
            this.showNotification('Видалено з кошика', text, 'success');
        },

        showNotification(title, text, type = 'info') {
            const notification = this.build(title, text, type);

            timer = setTimeout(() => {
                if (notification) {
                    notification.remove()
                }
            }, timerDuration);
        },

        close: (el) => {
            const notification = $(el).parents('.notifications-item');

            if (notification){
                notification.remove();

                clearTimeout(timer)
            }
        },

        build: (title, text, type = 'info') => {
            let body = '';
                body += '<button class="close" onclick="Notifications.close(this)"></button>';
                body += '<div class="icon"></div>';
                body += '<div class="content">';
                body += '<p class="title">'+ title +'</p>';
                body += '<p class="text">'+ text +'</p>';
                body += '</div>';

            const notification = $('<div>', {
                class: 'notifications-item '+ type
            });

            notification.html(body);
            notification.appendTo(container);

            return notification
        }
    }
})();

$(document).ready(function () {
    // Notifications.showInfo('test');
    //
    // setTimeout(() => {
    //     Notifications.showNotification( 'custom', 'custom text');
    // }, 1000)
    //
    // setTimeout(() => {
    //     Notifications.showDeleted('test');
    // }, 2000)
    //
    // setTimeout(() => {
    //     Notifications.showAdded('test');
    // }, 3000)
})
