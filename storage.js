


localStorage.setItem('user', JSON.stringify({}));


console.clear();

$(document).ready( function() {

    var archivePlaceholder = $('#archive-placeholder');
    var markup = $('#archive-template').html();
    var template = Handlebars.compile(markup);

    var data = {
        title: '???',
        archive: [
            {
                title: '',
                link: '',
                status: {
                    complete: true,
                    type: 'essay',
                    description: '',
                },
                date: 'Thursday, May 8th',
                specialNote: '',
                poster: {
                    small: 'https://unsplash.it/1600/900?random',
                    medium: 'https://unsplash.it/1600/900?random',
                    large: 'https://unsplash.it/1600/900?random'
                },
                headliners: [
                    {
                        name: 'Headliner 1',
                        link: ''
                    },
                    {
                        name: 'Headliner 2',
                        link: ''
                    },
                    {
                        name: 'Headliner 3',
                        link: ''
                    }
                ],
            },
            {
                title: '',
                link: '',
                status: {
                    complete: true,
                    type: 'essay',
                    description: '',
                },
                date: 'Thursday, May 8th',
                specialNote: '',
                poster: {
                    small: 'https://unsplash.it/1600/900?random',
                    medium: 'https://unsplash.it/1600/900?random',
                    large: 'https://unsplash.it/1600/900?random'
                },
                headliners: [
                    {
                        name: 'Headliner 1',
                        link: ''
                    },
                    {
                        name: 'Headliner 2',
                        link: ''
                    },
                    {
                        name: 'Headliner 3',
                        link: ''
                    }
                ],
            },
            {
                title: '',
                link: '',
                status: {
                    complete: true,
                    type: 'essay',
                    description: '',
                },
                date: 'Thursday, May 8th',
                specialNote: '',
                poster: {
                    small: 'https://unsplash.it/1600/900?random',
                    medium: 'https://unsplash.it/1600/900?random',
                    large: 'https://unsplash.it/1600/900?random'
                },
                headliners: [
                    {
                        name: 'Headliner 1',
                        link: ''
                    },
                    {
                        name: 'Headliner 2',
                        link: ''
                    },
                    {
                        name: 'Headliner 3',
                        link: ''
                    }
                ],
            },
            {
                title: '',
                link: '',
                status: {
                    complete: true,
                    type: 'essay',
                    description: '',
                },
                date: 'Thursday, May 8th',
                specialNote: '',
                poster: {
                    small: 'https://unsplash.it/1600/900?random',
                    medium: 'https://unsplash.it/1600/900?random',
                    large: 'https://unsplash.it/1600/900?random'
                },
                headliners: [
                    {
                        name: 'Headliner 1',
                        link: ''
                    },
                    {
                        name: 'Headliner 2',
                        link: ''
                    },
                    {
                        name: 'Headliner 3',
                        link: ''
                    }
                ],
            },
            {
                title: '',
                link: '',
                status: {
                    complete: true,
                    type: 'essay',
                    description: '',
                },
                date: 'Thursday, May 8th',
                specialNote: '',
                poster: {
                    small: 'https://unsplash.it/1600/900?random',
                    medium: 'https://unsplash.it/1600/900?random',
                    large: 'https://unsplash.it/1600/900?random'
                },
                headliners: [
                    {
                        name: 'Headliner 1',
                        link: ''
                    },
                    {
                        name: 'Headliner 2',
                        link: ''
                    },
                    {
                        name: 'Headliner 3',
                        link: ''
                    }
                ],
            },
        ]
    };
    archivePlaceholder.html( template(data) );



    // $global
    var $window = $(window);
    var windowWidth;
    var windowHeight;

    function getWindowDimentions() {
        windowWidth = $window.width();
        windowHeight = $window.height();
    }

    function setResponsibleImageSrc(imageAncestorElement, container) {
        var lar = false; // innocent until proven guilty
        var med = false; // "
        var context;
        if ( !container ) {
            context = windowWidth;
        } else {
            context = $(container).outerWidth();
        }
        lar = context > 900;
        med = context > 550;

        $(imageAncestorElement).each( function() {
            var $this = $(this).find('img');
            var src = {};
            src.small = $this.data('small');
            src.medium = $this.data('medium');
            src.large = $this.data('large');
            if ( lar ) {
                $this.attr('src', src.large);
            } else if ( med ) {
                $this.attr('src', src.medium);
            } else {
                $this.attr('src', src.small);
            }
        });
    };

    $window.on('resize', function() { // this should jog a bit
        getWindowDimentions();
        setResponsibleImageSrc('.archive-list .poster', '.archive-list');
    }).trigger('resize');

});


