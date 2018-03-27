const DATAS = {
    ru: {
        title: "Трехмерные модели событий",
        grade: "7 Класс",
        typeder: "Интерактивная лекция",
        prologue: {
            author: 'Б. Дизраэли (британский государственный и политический деятель',
            phrase: 'Наибольшего успеха добивается тот, кто располагает лучшей информацией.',
        },
        parts: [
            {
                title: 'Немного истории',
                image: 'a1.jpg',
                info: 'Что такое виртуальная реальность?',
                interactive: {
                    name: 'lecture',
                    items: {

                        shape: {
                            title: 'Немного|истории...',
                            subTitle: "Трехмерные|модели|событий",
                            bg: {
                                parallax: 'public/1/shape.jpg',
                            }
                        },
                        views: [
                            {
                                name: 'm-text',
                                title: 'Виртуальная реальность',
                                big: true,
                                text: ['Это созданный техническими средствами мир, в котором человек ощущает себя близко к тому, как он себя ощущает в реальном мире. Технологии виртуальной реальности развиваются постоянно.',
                                    'Сегодня благодаря 3D-моделированию, можно превратить идеи в наглядный результат, создать объемное изображение любого предмета с фотографической точностью.']
                            },
                            [
                                {
                                    name: 'm-image',
                                    src: 'public/1/peoples.png',
                                },
                                {
                                    name: 'm-text',
                                    title: 'Рисование мультика на страницах блокнота',
                                    text: ['"Оживить" рисунки люди пытались давно, начиная с китайского театра теней (начало 2-го тысячелетия н.э.), волшебного фонаря А. Кишера, который показывал движущееся изображение на стекле (конец 17 в.)  и т.д., до изобретения кинокамеры, с ее помощью в 1906 г. в Америке Дж. Блэктон сделал первый мультфильм (черно-белый и без звука). Первый мультфильм со звуком создал У. Дисней в 1928 г., первый цветной мультфильм - он же, в 1937 г. В нашей стране первый мультфильм появился в 1924 году.']
                                }
                            ],
                            {
                                name: 'm-image',
                                src: 'public/1/bg-run.png',
                            },
                            [
                                {
                                    name: 'm-image',
                                    src: 'public/1/run-1.gif',
                                    backgroundColor: '#02f6ff'
                                },
                                {
                                    name: 'm-text',
                                    big: true,
                                    text: ['Для того, чтобы зрители посмотрели 1 секунду озвученного мультфильма, художники-мультипликаторы должны нарисовать 24 кадра.', '10 минут - около 15000 кадров. ']
                                }
                            ],
                            {
                                name: 'm-video',
                                src: 'public/1/video1.mp4',
                                bg: 'public/1/bg1.jpg',
                                full: true,
                                // bgVideo: true,
                                // height: 800,
                                // bgVideo: true,
                                // height: 800,
                            },
                            {
                                name: 'm-text',
                                title: 'Переход к более современному формату',
                                big: true,
                                text: ['Это созданный техническими средствами мир, в котором человек ощущает себя близко к тому, как он себя ощущает в реальном мире. Технологии виртуальной реальности развиваются постоянно.']
                            },
                            {
                                name: 'm-video',
                                src: 'public/1/video3.mp4',
                                bg: 'public/1/bg3.jpg',
                                full: true,
                            },
                            [
                                {
                                    name: 'm-text',
                                    title: 'Цифровая анимация',
                                    big: true,
                                    text: ['Таким образом новая модель организационной деятельности играет важную роль в формировании существенных финансовых и административных условий. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации направлений прогрессивного развития.'],
                                },
                                {
                                    name: 'm-image',
                                    src: 'public/1/animations.png',
                                }
                            ],
                            {
                                name: 'm-video',
                                src: 'public/1/video4.mp4',
                                bgVideo: true,
                                height: 800,
                                full: true,
                                title: 'Анализируй',
                            },
                            [
                                {
                                    name: 'm-image',
                                    src: 'public/1/poly.png',
                                },
                                {
                                    name: 'm-text',
                                    title: 'Современные технологии',
                                    text: ['С появлением компьютерных технологий этот процесс упростился, и создать простые анимации могут даже дети. Для производства 30-секундного ролика требуется примерно 300-400 изображений.',
                                        'С появлением компьютерных технологий этот процесс стал автоматизированным. Для создания объемных моделей и анимации используются специальные программы: 3D-редакторы. ']
                                }

                            ],
                            {
                                name: 'm-video',
                                src: 'public/1/video2.mp4',
                                bg: 'public/1/bg2.jpg',
                                full: true,
                            },
                        ],
                    }
                }
            },
            {
                title: 'Попробуй',
                image: 'a3.jpg',
                info: 'Что необходимо для создания анимации в домашних условиях?',
                interactive: {
                    name: 'step',
                    items: {
                        title: 'Как сделать|анимацию дома?!',
                        prolog: 'Для создания анимации в домашних условиях можно использовать подручные материалы.' +
                        '<p>Что для этого необходимо?</p>' +
                        '<ul><li>1.\tПродумать сюжет</li>' +
                        '<li>2.\tВыбрать героя</li>' +
                        '<li>3.\tСоздать нужное количество кадров, имитирующих действие</li>' +
                        '<li>4.\tРасположить все кадры на временной ленте специальной программы и задать режим проигрывания</li>' +
                        '</ul>' +
                        '<br/>Ну это сложно и долго!' +
                        '<br/>Верно!' +
                        '<br/><br/><p>Можно упростить процесс, используя специальные программы. А как это сделать сейчас вы увидите:</p>\n',
                        steps: [{
                            title: '1 шаг',
                            image: 'public/aurora_icon.png',
                            text: 'Скачать и установить 3D-редактор. Например: Aurora 3D Animation Maker. Приложение является условно-бесплатным. ',
                            href: {
                                title: 'Скачать программу',
                                link: 'public/Animation3D.exe',
                                download: 'Aurora3D'
                            }
                        }, {
                            title: '2 шаг',
                            image: 'public/earth.gif',
                            text: 'Определить какой объект будет анимироваться. Предлагаю создать модель земного шара.'
                        }, {
                            title: '3 шаг',
                            image: 'public/map.jpg',
                            text: 'Подобрать фоновый рисунок и рисунок для текстуры.',
                            href: {
                                title: 'Скачать фоны',
                                link: 'public/Aurora.zip',
                                download: 'Aurora',
                            }
                        }, {
                            title: '4 шаг',
                            text: 'Запуск 3D-редактор, закрыть окно готовых проектов.',
                            video: 'public/1.webm'
                        }, {
                            title: '5 шаг',
                            text: 'Задать размеры создаваемой анимации: 300х300',
                            video: 'public/2.webm'
                        }, {
                            title: '6 шаг',
                            video: 'public/3.webm',
                            header: 'Выбрать фон. В нашем случае, это звёздное небо ',
                        }, {
                            title: '7 шаг',
                            video: 'public/4.webm',
                            text: 'Выбрать инструмент Сфера для рисования шара. Убираем лишнее свечение: вкладка Освещение – изменить света (освещение 1, освещение 3). Добавляем цвет: вкладка Цвет, выделив предварительно шар. Выбрать белый цвет, удалить галочки: Смесь и Выбраковка. В качестве текстуры выбрать нашу карту.'
                        }, {
                            title: '8 шаг',
                            video: 'public/5.webm',
                            text: 'Установить на ленте времени длительность анимации в 10 секунд. На вкладке Анимация выбрать метод – вращение, длительность 10 секунд. Установить «видимость» северного полюса (зажим правой клавиши мыши) и запуск на исполнение.',
                            footer: '<br/>Выполнить экспорт анимации.' +
                            '<br/>Проект готов! Поздравляю!',
                        }, {
                            title: 'Отлично!',
                            header: 'Ты справился с заданием!',
                            text: 'Добро пожаловать в команду аниматоров!'
                        }]
                    }
                }
            }
        ]
    },
    kz: {
        title: "Оқиғалардың үш өлшемді модельдері",
        grade: "7-сынып",
        typeder: "Интерактивті лекция",
        prologue: {
            author: 'Б. Дизраэли (британдық мемлекеттік және политехникалық қайраткер)',
            phrase: 'Ең жақсы ақпаратқа ие адам ғана жетістікке көп жетеді.',
        },
        parts: [
            {
                title: 'Сәл ғана тарих туралы',
                image: 'a1.jpg',
                info: 'Виртаулды шынайылық дегеніміз не?',
                interactive: {
                    name: 'lecture',
                    items: {

                        shape: {
                            title: 'Сәл ғана|тарих туралы ... ',
                            subTitle: 'Оқиғалардың|үш өлшемді модельдері',
                            bg: {
                                parallax: 'public/1/shape.jpg',
                            }
                        },
                        views: [
                            {
                                name: 'm-text',
                                title: 'Виртуалды шынайылық',
                                big: true,
                                text: ['бұл адам өзін шынайы әлемдегідей сезіне алатын техникалық құралдармен жасалған әлем. Виртуалды шынайылық технологиялары тұрақты дамуда.',
                                    'Бүгінде 3D модельдеудің арқасында идеяларды көрнекі нәтижеге айналдыруға, кез келген заттың фотосурет дәлдігімен көлемді кескінін жасауға болады.']
                            },
                            [
                                {
                                    name: 'm-image',
                                    src: 'public/1/peoples.png',
                                },
                                {
                                    name: 'm-text',
                                    title: 'Блокнот парақтарында мультфильм салу',
                                    text: ['Адамдар ерте кезден суретті «жандандыруға» тырысты. Бұл әрекет өзінің бастауын кинокамераны ойлап тапқанға дейін қытайлық көлеңкелер театрынан (б.з.д. 2 мыңжылдықтың басы), қозғалатынн суреттерді шыныда көрсеткен А. Кишердің сиқырлы шамынан (17 ғ. соңы) алады. 1906 жылы Америка қаласында Дж. Блэктон ең бірінші мультфильмді (түссіз және дыбыссыз) түсірді. У. Дисней ең алғаш рет 1928 жылы дыбысталған мультфильм, ал 1937 жылы алғашқы түрлі-түсті  мультфильмді жарыққа шығарды. Біздің елімізде мультфильм 1924 жылы шықты.']
                                }
                            ],
                            {
                                name: 'm-image',
                                src: 'public/1/bg-run.png',
                            },
                            [
                                {
                                    name: 'm-image',
                                    src: 'public/1/run-1.gif',
                                    backgroundColor: '#02f6ff'
                                },
                                {
                                    name: 'm-text',
                                    big: true,
                                    text: ['Көрермен дыбысталған  1 секундтық мультфильмді көруі үшін, суретші мультипликаторлар 24 кадрға сурет салады. 10 минутта 15000 кадр.']
                                }
                            ],
                            {
                                name: 'm-video',
                                src: 'public/1/video1.mp4',
                                bg: 'public/1/bg1.jpg',
                                full: true
                            },
                            {
                                name: 'm-text',
                                title: 'Заманауи форматқа көшу.',
                                big: true,
                                text: ['Бұл адамдардың шынайы өмірге жақын сезінуі үшін техникалық құралдардың көмегімен құрылған әлем.',
                                    'Виртуалды шынайылық технологиялар тұрақты түрде дамып келеді.']
                            },
                            {
                                name: 'm-video',
                                src: 'public/1/video3.mp4',
                                bg: 'public/1/bg3.jpg',
                                full: true,
                            },
                            [
                                {
                                    name: 'm-text',
                                    title: 'Цифрлық анимация',
                                    big: true,
                                    text: ['Осылайша ұйымдастыру қызметінің жаңа үлгісі қаржы және әкімшілік жағдайлардың қалыптасуында маңызды рөл атқарады.',
                                        'Біздің қызметімізді бірдей деңгейде тұрақты ақпараттық – насихаттау шаралары прогресивті даму бағытын жүзеге асырады.'],
                                },
                                {
                                    name: 'm-image',
                                    src: 'public/1/animations.png',
                                }
                            ],
                            {
                                name: 'm-video',
                                src: 'public/1/video4.mp4',
                                bgVideo: true,
                                height: 800,
                                full: true,
                                title: 'Талдау жаса',
                            },
                            [
                                {
                                    name: 'm-image',
                                    src: 'public/1/poly.png',
                                },
                                {
                                    name: 'm-text',
                                    title: 'Заманауи технологиялар',
                                    text: ['Компьютерлік технологиялар пайда болған кезде бұл процесс жеңілдеді және қазір қарапайым анимацияларды балалардың өздері де жасай алады. 30 секундтық ролик жасау үшін шамамен 300-400 кескін керек.',
                                        'Компьютерлік технологиялар пайда болған соң бұл процесс автоматтандырылды. Көлемді модельдер мен анимациялар жасау үшін арнайы бағдарламалар қолданылады: 3D-редакторлар.',
                                        'Жиі қолданылатын 3D – редакторының қысқаша анонсын қарауды ұсынамыз. ']
                                }

                            ],
                            {
                                name: 'm-video',
                                src: 'public/1/video2.mp4',
                                bg: 'public/1/bg2.jpg',
                                full: true,
                            },
                        ],
                    }
                }
            },
            {
                title: 'Байқап көр',
                image: 'a3.jpg',
                info: 'Үй жағдайында анимациялар жасау үшін қолда бар материалдарды қолдануға болады. Ол үшін не қажет?',
                interactive: {
                    name: 'step',
                    items: {
                        title: 'Оқиғалардың үш өлшемді модельдері',
                        prolog: 'Үй жағдайында анимациялар жасау үшін қолда бар материалдарды қолдануға болады.' +
                        '<p> Ол үшін не қажет?</p>' +
                        '<ul><li>1.\tСюжет ойлап табу</li>' +
                        '<li>2.\tКейіпкерді таңдау</li>' +
                        '<li>3.\tӘрекеттерді ұқсататын кадрлардың қажетті санын жасау</li>' +
                        '<li>4.\tКадрлардың барлығын арнайы бағдарламаның уақыт лентасына орналастыру және ойнату режимін тағайындау </li>' +
                        '</ul>' +
                        '<br/>Бірақ бұл қиын әрі ұзақ!!!!' +
                        '<br/>Дұрыс!' +
                        '<br/><br/><p>Арнайы бағдарламаларды қолдану арқылы процесті жеңілдетуге болады. Мұны қалай жасайтындығын қазір көресіз:</p>\n',
                        steps: [{
                            title: '1-қадам',
                            image: 'public/aurora_icon.png',
                            text: '3D-редакторды жүктеңіз және орнатыңыз. Мысалы: Aurora 3D Animation Maker. Қосымша шартты тегін болып табылады.',
                            href: {
                                title: 'Программаны жүктеу',
                                link: 'public/Animation3D.exe',
                                download: 'Aurora3D'
                            }
                        }, {
                            title: '2-қадам',
                            image: 'public/earth.gif',
                            text: 'Қандай нысанның анимацияланатындығын анықтаңыз. Жер шарының моделін жасауды ұсынамын.'
                        }, {
                            title: '3-қадам',
                            image: 'public/map.jpg',
                            text: 'Фондық суретті және текстураға арналған суретті таңдаңыз.',
                            href: {
                                title: 'Скачать фоны',
                                link: 'public/Aurora.zip',
                                download: 'Aurora',
                            }
                        }, {
                            title: '4-қадам',
                            text: '3D-редакторды іске қосыңыз, дайын жобалар терезесін жабыңыз.',
                            video: 'public/1.webm'
                        }, {
                            title: '5-қадам',
                            text: 'Жасалатын анимация өлшемдерін тағайындаңыз: 300х300',
                            video: 'public/2.webm'
                        }, {
                            title: '6-қадам',
                            video: 'public/3.webm',
                            header: 'Фонды таңдаңыз. Біздің жағдайда бұл жұлдызды аспан',
                        }, {
                            title: '7-қадам',
                            video: 'public/4.webm',
                            text: 'Шарды салу үшін Сфера құралын таңдаңыз. Артық жарықты алып тастаймыз: Жарықтандыру қойындысы – жарықты өзгерту (1-жарықтандыру, 2-жарықтандыру). Түс қосамыз: Түс қойындысы, шарды алдын ала ерекшелейді. Ақ түсті таңдап, құс белгілерді алып тастаңыз: Қоспа және Іріктеу. Текстура ретінде біздің картамызды таңдаңыз.'
                        }, {
                            title: '8-қадам',
                            video: 'public/5.webm',
                            text: 'Шарды салу үшін Сфера құралын таңдаңыз. Артық жарықты алып тастаймыз: Жарықтандыру қойындысы – жарықты өзгерту (1-жарықтандыру, 2-жарықтандыру). Түс қосамыз: Түс қойындысы, шарды алдын ала ерекшелейді. Ақ түсті таңдап, құс белгілерді алып тастаңыз: Қоспа және Іріктеу. Текстура ретінде біздің картамызды таңдаңыз.',
                            footer: '<br/>Анимацияны экспорттауды орындаңыз.' +
                            '<br/>Жоба дайын! Құттықтаймын!',
                        }, {
                            title: 'Өте тамаша!',
                            header: 'Тапсырманы орындадың!',
                            text: 'Аниматорлар командасына қош келдің!!!'
                        }]
                    }
                }
            }
        ]
    },
    en: {
        title: 'Three-dimensional event models',
        grade: "Grade 7",
        typeder: "On-line lecture",
        prologue: {
            author: 'B. Disraeli (Britain state and political leader) ',
            phrase: 'He can achieve the biggest success who has the best information',
        },
        parts: [
            {
                title: 'A little bit history',
                image: 'a1.jpg',
                info: 'What is virtual reality?',
                interactive: {
                    name: 'lecture',
                    items: {

                        shape: {
                            title: 'A little|bit history… ',
                            subTitle: 'Three-dimensional event models',
                            bg: {
                                parallax: 'public/1/shape.jpg',
                            }
                        },
                        views: [
                            {
                                name: 'm-text',
                                title: 'Virtual reality',
                                big: true,
                                text: ['Virtual reality is created world by technical features where a man feels himself close to feeling himself in real life. Technologies of virtual reality are developing permanently. ',
                                    'Today because of 3D-modeling, ideas can be converted into demonstrable result, 3D-image of any stuff with photographic exactness can be created. ']
                            },
                            [
                                {
                                    name: 'm-image',
                                    src: 'public/1/peoples.png',
                                },
                                {
                                    name: 'm-text',
                                    title: 'Drawing the cartoon on the pages of the notebook',
                                    text: ['The people tried to "revive" the drawings long ago, beginning with the Chinese shadow theater (the beginning of the 2nd millennium AD), the magic lantern of A. Kusher, who showed a moving image on the glass (late 17th century), etc., up to inventions of the movie camera, with the help of it J. Blackton made the first cartoon (black and white and without sound) in America in 1906. The first cartoon with sound was created by W. Disney in 1928, he also made the first color cartoon film in 1937. In our country the first cartoon appeared in 1924.']
                                }
                            ],
                            {
                                name: 'm-image',
                                src: 'public/1/bg-run.png',
                            },
                            [
                                {
                                    name: 'm-image',
                                    src: 'public/1/run-1.gif',
                                    backgroundColor: '#02f6ff'
                                },
                                {
                                    name: 'm-text',
                                    big: true,
                                    text: ['In order for viewers to watch 1 second of the animated cartoon, the artists-animators should draw 24 frames. 10 minutes - about 15000 frames.']
                                }
                            ],
                            {
                                name: 'm-video',
                                src: 'public/1/video1.mp4',
                                bg: 'public/1/bg1.jpg',
                                full: true,
                            },
                            {
                                name: 'm-text',
                                title: 'Switch to a more modern format',
                                big: true,
                                text: ['This is a technically created world in which a person feels close to how he feels in the real world. Virtual reality technologies are constantly evolving.']
                            },
                            {
                                name: 'm-video',
                                src: 'public/1/video3.mp4',
                                bg: 'public/1/bg3.jpg',
                                full: true,
                            },
                            [
                                {
                                    name: 'm-text',
                                    title: 'Digital animation.',
                                    big: true,
                                    text: ['Thus, the new model of organizational activity plays an important role in the formation of significant financial and administrative conditions. Equally, the constant information and propaganda support of our activities contributes to the preparation and implementation of the directions of progressive development.']
                                },
                                {
                                    name: 'm-image',
                                    src: 'public/1/animations.png',
                                }
                            ],
                            {
                                name: 'm-video',
                                src: 'public/1/video4.mp4',
                                bgVideo: true,
                                height: 800,
                                full: true,
                                title: 'Analyze',
                            },
                            [
                                {
                                    name: 'm-image',
                                    src: 'public/1/poly.png',
                                },
                                {
                                    name: 'm-text',
                                    title: 'Modern technologies',
                                    text: ['With the advent of computer technology, this process has become simpler, and even children can create simple animations. To make a 30-second movie, approximately 300-400 images are required.']
                                }

                            ],
                            {
                                name: 'm-video',
                                src: 'public/1/video2.mp4',
                                bg: 'public/1/bg2.jpg',
                                full: true,
                            },
                        ],
                    }
                }
            },
            {
                title: 'Try',
                image: 'a3.jpg',
                info: 'It is possible to use locally available materials for creation of animation in home conditions. What do you need for that?',
                interactive: {
                    name: 'step',
                    items: {
                        title: 'What is necessary|for creating animations|at home?',
                        prolog: 'It is possible to use locally available materials for creation of animation in home conditions.' +
                        '<p>What do you need for that?</p>' +
                        '<ul><li>1.\tThink synopsis</li>' +
                        '<li>2.\tChoose a hero</li>' +
                        '<li>3.\tCreate necessary quantity of shots, imitating action</li>' +
                        '<li>4.\tAllocate all shots on timed tape of special program and put playing regime.</li>' +
                        '</ul>' +
                        '<br/>This is difficult and needs a long time!!! ' +
                        '<br/>True!' +
                        '<br/><br/><p>It is possible to reduce process by using special programs.\n' +
                        'And how this can be performed now you will see:\n</p>\n',
                        steps: [{
                            title: 'Step 1',
                            image: 'public/aurora_icon.png',
                            text: 'Download and install 3D-editor. For example: Aurora 3D Animation Maker. Application is conditionally free.',
                            href: {
                                title: 'Download program',
                                link: 'public/Animation3D.exe',
                                download: 'Aurora3D'
                            }
                        }, {
                            title: 'Step 2',
                            image: 'public/earth.gif',
                            text: 'Determine which object will be animated. I suggest to create a model of the globe.'
                        }, {
                            title: 'Step 3',
                            image: 'public/map.jpg',
                            text: 'Select a background image and a picture for the texture.',
                            href: {
                                title: 'Скачать фоны',
                                link: 'public/Aurora.zip',
                                download: 'Aurora',
                            }
                        }, {
                            title: 'Step 4',
                            text: 'Initializing of 3D-editor, close window of existing projects.',
                            video: 'public/1.webm'
                        }, {
                            title: 'Step 5',
                            text: 'Set sizes of creating animation: 300x300',
                            video: 'public/2.webm'
                        }, {
                            title: 'Step 6',
                            video: 'public/3.webm',
                            header: 'Choose a background graphics. In our case this is starry heaven.',
                        }, {
                            title: 'Step 7',
                            video: 'public/4.webm',
                            text: 'Choose tool Sphere for painting of the globe. Delete superfluous illumination: tab Illumination – change light (illumination 1, illumination 3). Add colour: tab Colour, select prior the globe. Select white colour, delete marks: Mixtures and Rejection. Choose our map as a texture.'
                        }, {
                            title: 'Step 8',
                            video: 'public/5.webm',
                            text: 'Set animation duration on timed tape 10 seconds. On tab Animation choose method – rotation, duration is 10 seconds. Set “visibility” of north pole (press of right mouse button) and initialization for implementation.',
                            footer: '<br/>Perform export of animation.\n' +
                            '<br/>Project is finished! Congratulations!'
                        }, {
                            title: 'Well done!  ',
                            header: 'You could perform this task!',
                            text: 'Welcome to team of animators!!!'
                        }]
                    }
                }
            }
        ]
    },
}