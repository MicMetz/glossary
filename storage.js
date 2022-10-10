localStorage.setItem('user', JSON.stringify({}));


console.clear();

$(document).ready(function () {

    var archivePlaceholder = $('#archive-placeholder');
    var markup = $('#archive-template').html();
    var template = Handlebars.compile(markup);

    var data = {
        title: '???', archive: [{
            title: '', link: '', status: {
                complete: true, type: 'essay', description: '',
            }, creationdate: 'Thursday, May 8th', specialNote: '', poster: {
                small: 'https://unsplash.it/1600/900?random', medium: 'https://unsplash.it/1600/900?random', large: 'https://unsplash.it/1600/900?random'
            }, headline: [{
                name: 'Header 1', link: ''
            }, {
                name: 'Header 2', link: ''
            }, {
                name: 'Header 3', link: ''
            }],
        }, {
            title: '', link: '', status: {
                complete: true, type: 'essay', description: '',
            }, creationdate: 'Thursday, May 8th', specialNote: '', poster: {
                small: 'https://unsplash.it/1600/900?random', medium: 'https://unsplash.it/1600/900?random', large: 'https://unsplash.it/1600/900?random'
            }, headline: [{
                name: 'Header 1', link: ''
            }, {
                name: 'Header 2', link: ''
            }, {
                name: 'Header 3', link: ''
            }],
        }, {
            title: '', link: '', status: {
                complete: true, type: 'essay', description: '',
            }, creationdate: 'Thursday, May 8th', specialNote: '', poster: {
                small: 'https://unsplash.it/1600/900?random', medium: 'https://unsplash.it/1600/900?random', large: 'https://unsplash.it/1600/900?random'
            }, headline: [{
                name: 'Header 1', link: ''
            }, {
                name: 'Header 2', link: ''
            }, {
                name: 'Header 3', link: ''
            }],
        }, {
            title: '', link: '', status: {
                complete: true, type: 'essay', description: '',
            }, creationdate: 'Thursday, May 8th', specialNote: '', poster: {
                small: 'https://unsplash.it/1600/900?random', medium: 'https://unsplash.it/1600/900?random', large: 'https://unsplash.it/1600/900?random'
            }, headline: [{
                name: 'Header 1', link: ''
            }, {
                name: 'Header 2', link: ''
            }, {
                name: 'Header 3', link: ''
            }],
        }, {
            title: '', link: '', status: {
                complete: true, type: 'essay', description: '',
            }, creationdate: 'Thursday, May 8th', specialNote: '', poster: {
                small: 'https://unsplash.it/1600/900?random', medium: 'https://unsplash.it/1600/900?random', large: 'https://unsplash.it/1600/900?random'
            }, headline: [{
                name: 'Header 1', link: ''
            }, {
                name: 'Header 2', link: ''
            }, {
                name: 'Header 3', link: ''
            }],
        },]
    };
    archivePlaceholder.html(template(data));


    var $window = $(window);
    var windowWidth;
    var windowHeight;

    function getDimentions() {
        windowWidth = $window.width();
        windowHeight = $window.height();
    }

    function setResponsive(imgEle, imgContainer) {
        var context;
        if (!imgContainer) {
            context = windowWidth;
        } else {
            context = $(imgContainer).outerWidth();
        }

        $(imgEle).each(function () {
            var $this = $(this).find('img');
            var src = {};
            src.small = $this.data('small');
            src.medium = $this.data('medium');
            src.normal = $this.data('normal');
            src.large = $this.data('large');
            if (context < 768) {
                $this.attr('src', src.small);
            }
            if (context >= 768 && context < 992) {
                $this.attr('src', src.medium);
            }
            if (context >= 992 && context < 1200) {
                $this.attr('src', src.normal);
            }
            if (context >= 1200) {
                $this.attr('src', src.large);
            }
        });


    };

    $window.on('resize', function () {
        getDimentions();
        setResponsive('.archive-list .poster', '.archive-list');
    }).trigger('resize');

});


