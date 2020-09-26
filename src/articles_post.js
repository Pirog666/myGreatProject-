import './styles/main_style.scss';
import './styles/articles_post.scss';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import header from './htmlfiles/partials/header.html';
import border from './htmlfiles/partials/border_hr.html';
import articles_post_content from './htmlfiles/partials/content/articles_post_content.html';


const info = []; // объявление массива
// в будущем массив объектов с краткой информацией о статье
// будет будет приходить с сервера 
info[0] = {
    picture: 'https://img3.goodfon.ru/wallpaper/nbig/c/6f/schenok-schenochek-sobaka-sobachka-3398.jpg',
    tags: '#1',
    name: 'hi lalalalal',
    date: '01.01.2001'
}

window.onload = function () {

    let template = articles_post_content;
    let innerBlocks = mustache.render(template, info[0]);

    $('#screen').html(header + border + innerBlocks);

    // const queryString = window.location.search;
    // console.log(queryString);
    // const urlParams = new URLSearchParams(queryString);
    // const product = urlParams.get('id');
    // console.log(product);
    // server.requestData("id23")
}
