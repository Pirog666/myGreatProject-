import './styles/main_style.scss';
import './styles/articles_post.scss';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import header from './htmlfiles/partials/header.html';
import border from './htmlfiles/partials/border_hr.html';
import articles_post_content from './htmlfiles/partials/content/articles_post_content.html';


let data = new Promise((resolve, reject) => {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let product = urlParams.get('id');

    fetch('http://localhost:3012/articles/' + product).then(data => {
        resolve(data.json());
    })
});


window.onload = async function () {

    let template = articles_post_content;
    let info = await data;
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
      };

    let resultItem = {
        picture: info.picture_url,
        tags: info.tag_names,
        name: info.name,
        date: new Date(info.date).toLocaleString("ru", options)
    }
    
    let innerBlocks = mustache.render(template, resultItem);

    $('#screen').html(header + border + innerBlocks);

    $('.btnMedio').click(function (event) {
        console.log('yes');
        event.preventDefault();
        var n = $(document).height();
        $('html, body').animate({ scrollTop: 1000 }, 500);
    });

}


// $('.btnMedio').click(function (event) {
//     console.log('yes');
//     // Preventing default action of the event
//     event.preventDefault();
//     // Getting the height of the document
//     var n = $(document).height();
//     $('html, body').animate({ scrollTop: n }, 50);
// //                                       |    |
// //                                       |    --- duration (milliseconds) 
// //                                       ---- distance from the top
// });
