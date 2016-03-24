function addCarouselImages(baseUrl, numberImages, type) {
    for(var i = 1; i <= numberImages ; i++) {
        var imgSrc = baseUrl + '/' + type + '-img' + i;
        var imageHtml = '<div class="item '+ (i === 1 ? 'active' : '') + '"> ' +
            '                <img src="' + imgSrc + '.jpg" alt="..."/>' +
            '                <div class="carousel-caption">' +
            '                </div>' +
            '            </div>';
        $('.carousel-inner').append(imageHtml);

        if ($('.thumbnails-carousel').length) {
            var thumbnailHtml = '<li><img src="'+ imgSrc + '.jpg" alt="..."/></li>';
            $('.thumbnails-carousel').append(thumbnailHtml);
        }
    }
}

function addThumbnailImages(numberImages) {
    for(var i = 1; i <= numberImages ; i++) {
        var imgSrc = '/img/all/all-img' + i + '.jpg';
        var thumbnailImageHtml = '<div class="col-xs-6 col-md-3 col-lg-3">' +
            '                         <a href="' + imgSrc + '" class="thumbnail">' +
            '                             <img src="' + imgSrc + '" alt="..."/>' +
            '                         </a>' +
            '                     </div>';

        $('#ny-all-thumbnail').append(thumbnailImageHtml);
    }
}

function initializeInProgressPage() {
    $(document).ready(function () {
        addCarouselImages('/img/inProgress', NUMBER_PICTURES, 'inProgress');

        $('.thumbnails-carousel').thumbnailsCarousel({
            center: true,
            backgroundControl: false
        });
    });
}

function initializeInCompletePage() {
    $(document).ready(function () {
        addCarouselImages('/img/inComplete', NUMBER_PICTURES, 'inComplete');

        $('.thumbnails-carousel').thumbnailsCarousel({
            center: true,
            backgroundControl: false
        });
    });
}

function initializeHomePage() {
    $(document).ready(function () {
        addCarouselImages('/img/home', NUMBER_PICTURES, 'home');

        $('.carousel').carousel({
            interval: 5000
        });
    });
}

function initializeAllPage() {
    $(document).ready(function () {
        addThumbnailImages(NUMBER_PICTURES);
    });
}