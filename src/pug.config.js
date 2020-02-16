module.exports = {
  locals: {
    formats: [
      {
        "title": "Нативная статья",
        "hello": {
          "title": "Express-Native",
          "text": "Контент, оформленный в стиле «Proglib».<br>Ваши мысли - наше исполнение.",
          "description": "Выслушаем идеи, сделаем предложения и сформируем концепт. Правки внесет и обоснует главный редактор. Команда подготовит расчеты и документацию за 10 рабочих дней и в облегченном режиме.",
          "button": "Хочу Экспресс-натив"
        },
        "text": "Материал, рассказывающий читателю о компании или продукте. Например: «Настройка инструментов совместной работы Microsoft для бизнеса »",
        "props": ["Объем 8 тыс. знаков", "Уникальная посещаемость от 10 000"],
        "price": "от 40 000 ₽",
        "button": "Заказать статью",
        "id": "native",
        "checked": true
      },
      {
        "title": "Интерактивный тест",
        "hello": {
          "title": "Express-Native",
          "text": "Контент, оформленный в стиле «Proglib».<br>Ваши мысли - наше исполнение.",
          "description": "Выслушаем идеи, сделаем предложения и сформируем концепт. Правки внесет и обоснует главный редактор. Команда подготовит расчеты и документацию за 10 рабочих дней и в облегченном режиме.",
          "button": "Хочу Экспресс-натив"
        },
        "text": "Набор вопросов, которые определяют уровень ознакомленности читателя с продуктом заказчика и предлагает получение знаний в этой области.",
        "props": ["Объем 10 вопросов", "Уникальная посещаемость от 10 000"],
        "price": "от 35 000 ₽",
        "button": "Заказать тест",
        "id": "test",
        "checked": false
      },
      {
        "title": "Браузерные игры",
        "hello": {
          "title": "Express-Native",
          "text": "Контент, оформленный в стиле «Proglib».<br>Ваши мысли - наше исполнение.",
          "description": "Выслушаем идеи, сделаем предложения и сформируем концепт. Правки внесет и обоснует главный редактор. Команда подготовит расчеты и документацию за 10 рабочих дней и в облегченном режиме.",
          "button": "Хочу Экспресс-натив"
        },
        "text": "Для самых искушенных. С их помощью возможно расположить аудиторию к необходимой теме, которую раскроете после прохождения игры.",
        "props": ["Объем по договоренности", "Уникальная посещаемость от 35 000"],
        "price": "от 100 000 ₽",
        "button": "Заказать игру",
        "id": "game",
        "checked": false
      }
    ],
    menu: [
      {
        "text": "Экспресс-натив",
        "id": "hello",
        "active": true
      },
      {
        "text": "Мы предлагаем",
        "id": "suggestions",
        "active": false
      },
      {
        "text": "Аудитория",
        "id": "audience",
        "active": false
      },
      {
        "text": "Форматы и стоимость",
        "id": "price",
        "active": false
      },
      {
        "text": "Заказ",
        "id": "order",
        "active": false
      }
    ],
    audience: {
      "controls": [
        {
          "control": "В общем",
          "id": "general"
        },
        {
          "control": "Основные сегменты",
          "id": "segments"
        },
        {
          "control": "География",
          "id": "geography"
        },
        {
          "control": "Языки программирования",
          "id": "langs"
        },
        {
          "control": "Опыт и специализация",
          "id": "experience"
        }
      ],
      "common": [
        {
          "value": "500 000",
          "title": "Уникальных посетителей на сайте ежемесячно",
          "id": "uniq"
        },
        {
          "value": "500 000",
          "title": "Совокупная аудитория в социальных сетях",
          "id": "total"
        },
        {
          "value": "110 000",
          "title": "Средний совокупный охват во всех социальных сетях",
          "id": "all"
        }
      ],
      "mainSegments": [
        {
          "value": "35%",
          "title": "Молодые специалисты 25-34 года",
          "text": "Опытные IT-специалисты, заинтересованные в прокачке своих навыков либо специалисты смежных областей, которые хотят научиться программировать.",
          "id": "young",
          "chart": {
            "img": "/img/audience-young.svg",
            "items": ["86% Мужчины", "14% Женщины"],
            "alt": "Молодые специалисты 25-34 года"
          }
        },
        {
          "value": "40%",
          "title": "Студенты IT-направлений",
          "text": "Ищут материалы для учебы и подготовки к поступлению на работу в компании, в то время как школьников в районе 5%",
          "id": "students",
          "chart": {
            "img": "/img/audience-students.svg",
            "items": ["63% Россия", "37% Другие страны"],
            "alt": "Студенты IT-направлений"
          }
        }
      ],
      "geography": [
        {
          "id": "countries",
          "chart": {
            "img": "/img/audience-countries.svg",
            "alt": "Страны",
            "label": "Страны",
            "items": ["63% Россия", "15% Украина", "8% Беларусь", "14% Другие"]
          }
        },
        {
          "id": "cities",
          "chart": {
            "img": "/img/audience-cities.svg",
            "alt": "Города",
            "label": "Города",
            "items": [
              "133 000 Москва",
              "64 000 Санкт-петербург",
              "12 000 Екатеринбург",
              "11 000 Краснодар",
              "280 000 другие"
            ]
          }
        }
      ],
      "langs": [
        {
          "label": "24% Python",
          "id": "python"
        },
        {
          "label": "17% JavaScript",
          "id": "js"
        },
        {
          "label": "15% Java",
          "id": "java"
        },
        {
          "label": "14% C++",
          "id": "cpp"
        },
        {
          "label": "14% C++",
          "id": "csharp"
        },
        {
          "label": "11% PHP",
          "id": "php"
        }
      ],
      "experience": [
        {
          "id": "experience",
          "chart": {
            "img": "/img/audience-experience.svg",
            "alt": "",
            "label": "Опыт",
            "items": ["12% Более 6 лет","12% 3-6 лет","24% 1-3 года", "15% Менее 1 года","37% Без опыта"
            ]
          }
        },
        {
          "id": "spec",
          "chart": {
            "img": "/img/audience-spec.svg",
            "alt": "",
            "label": "Специали<br>зация",
            "items": [
             "17% Backend","14% Fullstack","13% Frontend", "7% Data science","6% QA","5% GameDev","12% Другое","24% Хочу в IT"
            ]
          }
        }
      ]
    },
    suggestions: [
      {
        "title": "Быть на слуху",
        "text": "нативные материалы на информационном ресурсе позволят сотням тысяч разработчиков узнать подробнее о компании и запомнить имя бренда"
      },
      {
        "title": "Лояльность",
        "text": "материал просматривается нужной аудиторией"
      },
      {
        "title": "SEO",
        "text": "публикации Proglib не только вызывают постоянный интерес у читателей, но и остаются в ленте навсегда"
      },
      {
        "title": "Свои среди читателей",
        "text": "разработчики в команде как никто понимают аудиторию и мы знаем, чем заинтересовать каждого"
      },
      {
        "title": "Серьезный настрой",
        "text": "наличие контента на информационных ресурсах говорят о намерениях компании"
      },
      {
        "title": "Опыт",
        "text": "редакторы и авторы помогут ярко рассказать историю бренда и выделиться среди конкурентов"
      }
    ],
    networks: [
      {
        "title": "Facebook",
        "link": "https://www.facebook.com/proglib/",
        "icon": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>'
      },
      {
        "title": "Instagram",
        "link": "https://instagram.com/proglibrary",
        "icon": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/></svg>'
      },
      {
        "title": "Telegram",
        "link": "tg://resolve?domain=proglibrary",
        "icon": '<svg width="24px" height="24px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><path id="telegram-4" d="M12,0c-6.626,0 -12,5.372 -12,12c0,6.627 5.374,12 12,12c6.627,0 12,-5.373 12,-12c0,-6.628 -5.373,-12 -12,-12Zm3.224,17.871c0.188,0.133 0.43,0.166 0.646,0.085c0.215,-0.082 0.374,-0.267 0.422,-0.491c0.507,-2.382 1.737,-8.412 2.198,-10.578c0.035,-0.164 -0.023,-0.334 -0.151,-0.443c-0.129,-0.109 -0.307,-0.14 -0.465,-0.082c-2.446,0.906 -9.979,3.732 -13.058,4.871c-0.195,0.073 -0.322,0.26 -0.316,0.467c0.007,0.206 0.146,0.385 0.346,0.445c1.381,0.413 3.193,0.988 3.193,0.988c0,0 0.847,2.558 1.288,3.858c0.056,0.164 0.184,0.292 0.352,0.336c0.169,0.044 0.348,-0.002 0.474,-0.121c0.709,-0.669 1.805,-1.704 1.805,-1.704c0,0 2.084,1.527 3.266,2.369Zm-6.423,-5.062l0.98,3.231l0.218,-2.046c0,0 3.783,-3.413 5.941,-5.358c0.063,-0.057 0.071,-0.153 0.019,-0.22c-0.052,-0.067 -0.148,-0.083 -0.219,-0.037c-2.5,1.596 -6.939,4.43 -6.939,4.43Z"/></svg>',
      },
      {
        "title": "VKontacte",
        "link": "https://vk.com/proglib",
        "icon": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.344 16.163h-1.867c-1.055 0-1.232-.601-2.102-1.469-.785-.785-1.22-.183-1.202.935.006.297-.141.534-.495.534-1.105 0-2.694.156-4.304-1.58-1.647-1.779-3.374-5.348-3.374-5.699 0-.208.172-.301.459-.301h1.898c.503 0 .545.249.686.568.584 1.331 1.981 4.002 2.354 2.511.214-.856.301-2.839-.615-3.01-.52-.096.396-.652 1.722-.652.33 0 .688.035 1.054.12.673.156.676.458.666.898-.034 1.666-.235 2.786.204 3.069.419.271 1.521-1.502 2.104-2.871.159-.378.191-.632.643-.632h2.322c1.216 0-.159 1.748-1.21 3.112-.847 1.099-.802 1.12.183 2.034.701.651 1.53 1.54 1.53 2.043 0 .238-.186.39-.656.39z"/></svg>'
      }
    ],
    blots: [
      '<svg class="blot blot--1" width="112" height="96" viewBox="0 0 112 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M55.5962 88.5082C24.8549 93.8625 12.2837 87.5168 8.49313 65.7531C4.70251 43.9893 11.1279 15.049 41.8692 9.69471C72.6105 4.34047 100.604 17.643 104.395 39.4068C108.185 61.1705 77.4549 53.7419 55.5962 88.5082Z" fill="#76DB89"/></svg>',

      '<svg class="blot blot--2" width="107" height="119" viewBox="0 0 107 119" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M84.7697 48.9627C100.372 75.9863 98.7376 89.9731 79.6059 101.019C60.4742 112.065 42.6021 105.524 27.0001 78.5003C11.398 51.4767 2.74695 31.078 21.8787 20.0323C41.0104 8.98659 44.6059 40.397 84.7697 48.9627Z" fill="#FFED1C"/></svg>',

      '<svg class="blot blot--3" width="85" height="86" viewBox="0 0 85 86" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M40.6618 10.2055C70.404 19.6444 86.7981 11.4058 80.1156 32.4622C73.4332 53.5187 47.6533 80.4078 17.911 70.9689C-11.8312 61.5299 8.2283 54.7701 14.9108 33.7136C21.5932 12.6572 5.22413 30.9581 40.6618 10.2055Z" fill="#8E8EE1"/></svg>',

      '<svg class="blot blot--4" width="75" height="73" viewBox="0 0 75 73" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M43.4365 64.1012C13.6943 54.6622 -2.69983 62.9009 3.98263 41.8444C10.6651 20.7879 13.6942 2.19977 43.4365 11.6387C73.1787 21.0777 72.8697 8.58221 66.1872 29.6387C59.5048 50.6951 78.8742 43.3486 43.4365 64.1012Z" fill="#E18E8E"/></svg>',

      '<svg class="blot blot--5" width="99" height="88" viewBox="0 0 99 88" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M23.1468 61.9709C-4.7995 48.0893 3.17232 45.785 13 26C22.8277 6.215 27.0537 1.86668 55 15.7483C82.9463 29.6299 101.37 31.4968 91.5427 51.2818C81.715 71.0668 61.3441 46.8889 23.1468 61.9709Z" fill="#1CFFFF"/></svg>',

      '<svg class="blot blot--6" width="89" height="93" viewBox="0 0 89 93" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M56.4438 3.65975C87.1851 -1.69449 72.2094 10.2362 76 32C79.7906 53.7637 100.912 77.119 70.1708 82.4733C39.4295 87.8275 11.4359 74.525 7.64528 52.7612C3.85467 30.9975 16 18 56.4438 3.65975Z" fill="#DB76CB"/></svg>'
    ]
  }
}