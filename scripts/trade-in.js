const TradeIn = (() => {
    const typeTitle = $('.js-type-title');
    const typeText = $('.js-type-text');
    const questionTitle = $('.js-question-title');
    const questionText = $('.js-question-text');
    const optionsList = $('.js-options-list');
    const nextStep = $('.js-next-step');
    const currentDamageImage = $('.js-current-damage');
    const conditionContainer = $('.js-conditions-list');
    const imageContainer = $('.image-container');

    const data = {
        1: {
            type: {
                title: 'Екран',
                text: 'Оберіть з переліку, що найкраще відповідає стану екрана вашого смартфона.'
            },
            question: {
                title: 'Наявність подряпин',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam quam sit amet nisl sollicitudin ultrices. Donec eu dolor quis turpis convallis elementum. Aenean et tincidunt mi. Fusce ac aliquam nibh.'
            },
            name: 'test title',
            options: [
                {
                    value: 'Без подряпин',
                    text: 'Без подряпин',
                    image: './images/trade-in/damage/Екран. Подряпини 0.png'
                },
                {
                    value: 'Присутні непомітні подряпини',
                    text: 'Присутні непомітні подряпини',
                    image: './images/trade-in/damage/Екран. Подряпини 1.png'
                },
                {
                    value: 'Присутні помітні подряпини',
                    text: 'Присутні помітні подряпини',
                    image: './images/trade-in/damage/Екран. Подряпини 2.png'
                },
                {
                    value: 'Присутні глибокі подряпини',
                    text: 'Присутні глибокі подряпини',
                    image: './images/trade-in/damage/Екран. Подряпини 3.png'
                },
            ]
        },
        2: {
            type: {
                title: 'Екран',
                text: 'Оберіть з переліку, що найкраще відповідає стану екрана вашого смартфона.'
            },
            question: {
                title: 'Залишкове зображення',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam quam sit amet nisl sollicitudin ultrices. Donec eu dolor quis turpis convallis elementum. Aenean et tincidunt mi. Fusce ac aliquam nibh.'
            },
            name: 'test title',
            options: [
                {
                    value: 'Без залишкового зображення',
                    text: 'Без залишкового зображення',
                    image: './images/trade-in/damage/Екран. Залишкове зображення 0.png'
                },
                {
                    value: 'Присутнє мінімальне залишкове зображення',
                    text: 'Присутнє мінімальне залишкове зображення',
                    image: './images/trade-in/damage/Екран. Залишкове зображення 1.png'
                },
            ]
        },
        3: {
            type: {
                title: 'Екран',
                text: 'Оберіть з переліку, що найкраще відповідає стану екрана вашого смартфона.'
            },
            question: {
                title: 'Засвіти',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam quam sit amet nisl sollicitudin ultrices. Donec eu dolor quis turpis convallis elementum. Aenean et tincidunt mi. Fusce ac aliquam nibh.'
            },
            name: 'test title',
            options: [
                {
                    value: 'Без засвітів',
                    text: 'Без засвітів',
                    image: './images/trade-in/damage/Екран. Засвіти 0.png'
                },
                {
                    value: 'Присутні засвіти',
                    text: 'Присутні засвіти',
                    image: './images/trade-in/damage/Екран. Засвіти 1.png'
                },
            ]
        },

        4: {
            type: {
                title: 'Рамка',
                text: 'Оберіть з переліку, що найкраще відповідає стану рами корпусу вашого смартфона.'
            },
            question: {
                title: 'Подряпини',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam quam sit amet nisl sollicitudin ultrices. Donec eu dolor quis turpis convallis elementum. Aenean et tincidunt mi. Fusce ac aliquam nibh.'
            },
            name: 'test title',
            options: [
                {
                    value: 'Без подряпин',
                    text: 'Без подряпин',
                    image: './images/trade-in/damage/Рама корпусу. Подряпини 0.png'
                },
                {
                    value: 'Мінімальні подряпини',
                    text: 'Мінімальні подряпини',
                    image: './images/trade-in/damage/Рама корпусу. Подряпини 1.png'
                },
                {
                    value: 'Присутні незначні подряпини',
                    text: 'Присутні незначні подряпини',
                    image: './images/trade-in/damage/Рама корпусу. Подряпини 2.png'
                },
                {
                    value: 'Присутні помітні подряпини',
                    text: 'Присутні помітні подряпини',
                    image: './images/trade-in/damage/Рама корпусу. Подряпини 3.png'
                },
                {
                    value: 'Присутні глибокі подряпини',
                    text: 'Присутні глибокі подряпини',
                    image: './images/trade-in/damage/Рама корпусу. Подряпини 4.png'
                },
            ]
        },
        5: {
            type: {
                title: 'Рамка',
                text: 'Оберіть з переліку, що найкраще відповідає стану рами корпусу вашого смартфона.'
            },
            question: {
                title: 'Потертості',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam quam sit amet nisl sollicitudin ultrices. Donec eu dolor quis turpis convallis elementum. Aenean et tincidunt mi. Fusce ac aliquam nibh.'
            },
            name: 'test title',
            options: [
                {
                    value: 'Без потертостей',
                    text: 'Без потертостей',
                    image: './images/trade-in/damage/Рама корпусу. Потертості 0.png'
                },
                {
                    value: 'Присутні незначні потертості',
                    text: 'Присутні незначні потертості',
                    image: './images/trade-in/damage/Рама корпусу. Потертості 1.png'
                },
                {
                    value: 'Присутні помітні потертості',
                    text: 'Присутні помітні потертості',
                    image: './images/trade-in/damage/Рама корпусу. Потертості 2.png'
                },
            ]
        },
        6: {
            type: {
                title: 'Рамка',
                text: 'Оберіть з переліку, що найкраще відповідає стану рами корпусу вашого смартфона.'
            },
            question: {
                title: 'Вм\'ятини',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam quam sit amet nisl sollicitudin ultrices. Donec eu dolor quis turpis convallis elementum. Aenean et tincidunt mi. Fusce ac aliquam nibh.'
            },
            name: 'test title',
            options: [
                {
                    value: 'Без вмятин',
                    text: 'Без вмятин',
                    image: './images/trade-in/damage/Рама корпусу. Вм_ятини 0.png'
                },
                {
                    value: 'Присутня незначна вм\'ятина',
                    text: 'Присутня незначна вм\'ятина',
                    image: './images/trade-in/damage/Рама корпусу. Вм_ятини 1.png'
                },
                {
                    value: 'Присутня значна вм\'ятина',
                    text: 'Присутня значна вм\'ятина',
                    image: './images/trade-in/damage/Рама корпусу. Вм_ятини 2.png'
                },
            ]
        },
        7: {
            type: {
                title: 'Рамка',
                text: 'Оберіть з переліку, що найкраще відповідає стану рами корпусу вашого смартфона.'
            },
            question: {
                title: 'Тріщини',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam quam sit amet nisl sollicitudin ultrices. Donec eu dolor quis turpis convallis elementum. Aenean et tincidunt mi. Fusce ac aliquam nibh.'
            },
            name: 'test title',
            options: [
                {
                    value: 'Без тріщин',
                    text: 'Без тріщин',
                    image: './images/trade-in/damage/Рама корпусу. Тріщини 0.png'
                },
                {
                    value: 'Тріщина на рамці дисплея',
                    text: 'Тріщина на рамці дисплея',
                    image: './images/trade-in/damage/Рама корпусу. Тріщини 1.png'
                }
            ]
        },

        8: {
            type: {
                title: 'Задня кришка',
                text: 'Оберіть з переліку, що найкраще відповідає стану задньої кришки вашого смартфона.'
            },
            question: {
                title: 'Подряпини',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam quam sit amet nisl sollicitudin ultrices. Donec eu dolor quis turpis convallis elementum. Aenean et tincidunt mi. Fusce ac aliquam nibh.'
            },
            name: 'test title',
            options: [
                {
                    value: 'Без подряпин',
                    text: 'Без подряпин',
                    image: './images/trade-in/damage/Задня кришка. Подряпини 0.png'
                },
                {
                    value: 'Присутні мікроподряпини',
                    text: 'Присутні мікроподряпини',
                    image: './images/trade-in/damage/Задня кришка. Подряпини 1.png'
                },
                {
                    value: 'Присутні помітні подряпини',
                    text: 'Присутні помітні подряпини',
                    image: './images/trade-in/damage/Задня кришка. Подряпини 2.png'
                },
                {
                    value: 'Присутні глибокі подряпини',
                    text: 'Присутні глибокі подряпини',
                    image: './images/trade-in/damage/Задня кришка. Подряпини 3.png'
                },
            ]
        },
        9: {
            type: {
                title: 'Задня кришка',
                text: 'Оберіть з переліку, що найкраще відповідає стану задньої кришки вашого смартфона.'
            },
            question: {
                title: 'Потертості',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam quam sit amet nisl sollicitudin ultrices. Donec eu dolor quis turpis convallis elementum. Aenean et tincidunt mi. Fusce ac aliquam nibh.'
            },
            name: 'test title',
            options: [
                {
                    value: 'Без потертостей',
                    text: 'Без потертостей',
                    image: './images/trade-in/damage/Задня кришка. Потертості 0.png'
                },
                {
                    value: 'Мінімальні потертості',
                    text: 'Мінімальні потертості',
                    image: './images/trade-in/damage/Задня кришка. Потертості 1.png'
                },
                {
                    value: 'Присутні незначні потертості',
                    text: 'Присутні незначні потертості',
                    image: './images/trade-in/damage/Задня кришка. Потертості 2.png'
                },
                {
                    value: 'Присутні потертості',
                    text: 'Присутні потертості',
                    image: './images/trade-in/damage/Задня кришка. Потертості 3.png'
                },
            ]
        },
        10: {
            type: {
                title: 'Задня кришка',
                text: 'Оберіть з переліку, що найкраще відповідає стану задньої кришки вашого смартфона.'
            },
            question: {
                title: 'Тріщини',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam quam sit amet nisl sollicitudin ultrices. Donec eu dolor quis turpis convallis elementum. Aenean et tincidunt mi. Fusce ac aliquam nibh.'
            },
            name: 'test title',
            options: [
                {
                    value: 'Без тріщин',
                    text: 'Без тріщин',
                    image: './images/trade-in/damage/Задня крика. Тріщини 0.png'
                },
                {
                    value: 'Присутня незначна тріщина',
                    text: 'Присутня незначна тріщина',
                    image: './images/trade-in/damage/Задня крика. Тріщини 1.png'
                },
                {
                    value: 'Присутня значна тріщина',
                    text: 'Присутня значна тріщина',
                    image: './images/trade-in/damage/Задня крика. Тріщини 2.png'
                },
            ]
        },
        11: {
            type: {
                title: 'Задня кришка',
                text: 'Оберіть з переліку, що найкраще відповідає стану задньої кришки вашого смартфона.'
            },
            question: {
                title: 'Вм\'ятини',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam quam sit amet nisl sollicitudin ultrices. Donec eu dolor quis turpis convallis elementum. Aenean et tincidunt mi. Fusce ac aliquam nibh.'
            },
            name: 'test title',
            options: [
                {
                    value: 'Без вмятин',
                    text: 'Без вмятин',
                    image: './images/trade-in/damage/Задня кришка. Вм_ятини 0.png'
                },
                {
                    value: 'Присутні помітні вм\'ятина',
                    text: 'Присутні помітні вм\'ятина',
                    image: './images/trade-in/damage/Задня кришка. Вм_ятини 1.png'
                },
                {
                    value: 'Присутні незначні вм\'ятина',
                    text: 'Присутні незначні вм\'ятина',
                    image: './images/trade-in/damage/Задня кришка. Вм_ятини 2.png'
                },
            ]
        }
    };

    const result = {};

    let currentStep = 1;
    let savedStep = null;
    let isEdit = false;

    return {
        setData(event, option, step) {
            const button = $(event.target);
            const options = button.parent().find('button');

            // remove all active button
            options.map(function () {
                $(this).removeClass('active');
            });

            // add current active button
            button.addClass('active');

            result[currentStep] = {
                ...option,
                name: step.name,
                type: step.type.title
            };

            this.setCurrentDamageImage(option);

            nextStep.removeClass('disabled')
        },

        setCurrentDamageImage(option){
            currentDamageImage.removeClass('hidden').attr('src', option.image).attr('alt', option.text);
        },

        buildOptions(data, active) {
            optionsList.empty();

            data.options.forEach((option) => {
               const item =  $('<button>')
                    .text(option.text)
                    .attr('class', `option ${option.value === active ? 'active' : ''}`)
                    .on('click', function(event) {
                        TradeIn.setData(event, option, data);
                    });

                optionsList.append(item)
            });
        },

        setStepData(data, step) {
            typeTitle.html(data.type.title);
            typeText.html(data.type.text);
            questionTitle.html(data.question.title);
            questionText.html(data.question.text);

            this.buildOptions(data, result[step]?.value)

            if (!step) {
                nextStep.addClass('disabled')
            }
        },

        setConditionList() {
            if (conditionContainer) {
                let list = '';
                Object.keys(result).forEach((key) => {
                    const condition = result[key];

                    list += '<div class="answers-list-item" data-step="' + key + '"><span class="type">' + condition.type + '</span> <p class="answer">' + condition.text + '</p></div>';
                });

                conditionContainer.html(list);
            }
        },

        setImage(option) {
            if (imageContainer) {
                const image = imageContainer.find(`#layer-step-${option.name}`);

                if (image.length) {
                    image.attr('src', option.image).attr('alt', option.text)
                } else {
                    const img = $('<img />', {
                        class: 'layer',
                        id: `layer-step-${option.name}`,
                        src: option.image,
                        alt: option.text
                    });

                    img.appendTo(imageContainer);
                }
            }
        },

        validateInputs(form, button) {
            const allFilled = $(form).find('select, input')
                .toArray()
                .every((select) => !$(select).prop('required') || $(select).val() && $(select).val().trim() !== "");

            $(button).toggleClass("disabled", !allFilled);
            $('.js-verification-code').toggleClass("disabled", !allFilled);
        },

        next() {
            currentDamageImage.addClass('hidden');

            if (isEdit) {
                isEdit = false;
                currentStep = savedStep;
                savedStep = null;
            }

            if (currentStep === Object.keys(data).length) {
                this.toggleAdditionalStep(true);
            } else {
                this.setConditionList();

                if (isEdit) {
                    this.setStepData(data[currentStep]);
                } else {
                    const nextStep = data[currentStep + 1];

                    if (nextStep) {
                        this.setStepData(nextStep);

                        currentStep += 1;
                    }
                }
            }
        },

        dnd() {
            const dropArea = $('.file-input');
            const imageFileInput = $('.js-file');

            $(document).on('dragover drop', function(e) {
                e.preventDefault();
            });

            dropArea.on('dragover', function(e) {
                e.preventDefault();
                e.stopPropagation();
                dropArea.addClass('dragover');
            });

            dropArea.on('dragleave', function(e) {
                e.preventDefault();
                e.stopPropagation();
                dropArea.removeClass('dragover');
            });

            dropArea.on('drop', function(e) {
                e.preventDefault();
                e.stopPropagation();
                dropArea.removeClass('dragover');

                var files = e.originalEvent.dataTransfer.files;
                if (files.length) {
                    imageFileInput[0].files = files;
                }
            });

            dropArea.on('click', function() {
                imageFileInput[0].click();
            });
        },

        actions() {
            $('body').on('click', '.answers-list-item', function () {
                const step = $(this).attr('data-step');
                if (step) {
                    if(!isEdit){
                        savedStep = currentStep;

                        currentStep = step;
                    }

                    isEdit = true;

                    TradeIn.setStepData(data[step], step);

                    TradeIn.setCurrentDamageImage(result[step]);

                    TradeIn.toggleAdditionalStep(false);

                    nextStep.removeClass('disabled');
                }
            });

            $('body').on('change', '.main-form', function (evt) {
                TradeIn.validateInputs(this, '.js-main-form-submit');
            });

            $('body').on('click', '.js-edit-main-step', function (evt) {
                isEdit = true;

                TradeIn.toggleMainStep(false);
            });

            $('body').on('submit', '.main-form', function (event) {
                event.preventDefault();

                if (isEdit) {
                    isEdit = false;

                    TradeIn.setStepData(data[currentStep]);
                }

                TradeIn.toggleMainStep(true)
            });

            $('body').on('click', '.js-next-step', () => {
                this.next();
            });

            $('body').on('change', '.additional-step-form', function () {
                TradeIn.validateInputs(this, '.js-get-proposition');
            });

            $('body').on('submit', '.additional-step-form', function (event) {
                event.preventDefault();

                const formData = {};
                const form = $(this).serializeArray();

                form.forEach((field) => {
                    formData[field.name] = field.value
                });

                Object.values(result).forEach((field) => {
                    formData[field.name] = field.value;

                    TradeIn.setImage(field)
                });

                $.ajax({
                    url: '/get-proposition',
                    type: 'POST',
                    data: formData,
                    success: function(response) {

                    },
                    error: function(jqXHR, textStatus, errorThrown) {

                    }
                });

                TradeIn.togglePropositionStep(true);
            });

            $('body').on('change', '.request-form', function () {
                TradeIn.validateInputs(this, '.js-request-form-btn');
            });

            $('body').on('submit', '.request-form', function (event) {
                event.preventDefault();

                const formData = new FormData();
                const imageFile = $(this).find('.js-file')[0].files[0];
                const form = $(this).serializeArray();

                form.forEach((field) => {
                    formData.append(field.name, field.value);
                });

                formData.append('imageFile', imageFile);

                $.ajax({
                    url: '/upload',
                    type: 'POST',
                    data: formData,
                    contentType: false,
                    processData: false,
                    success: function(response) {

                    },
                    error: function(jqXHR, textStatus, errorThrown) {

                    }
                });
            });
        },

        toggleMainStep(status = false) {
            $('.js-main-step-block').toggleClass('hidden', status);
            $('.js-dynamic-step-block').toggleClass('hidden', !status);
        },

        toggleAdditionalStep(status = false) {
            $('.js-dynamic-step').toggleClass('hidden', status);
            $('.js-additional-step').toggleClass('hidden', !status);
        },

        togglePropositionStep(status = false) {
            conditionContainer.toggleClass('disabled', status);
            $('.js-edit-main-step').toggleClass('hidden', status);

            $('.js-additional-step').toggleClass('hidden', status);
            $('.js-proposition-step').toggleClass('hidden', !status);
        },

        init() {
            this.setStepData(data[currentStep]);

            this.dnd();
            this.actions();
        }
    }
})();

$(document).ready(() => {
    TradeIn.init();
})
