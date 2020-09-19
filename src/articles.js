import './styles/main_style.scss';
import './styles/articles.scss';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import * as $ from 'jquery';
import * as mustache from 'mustache';

import header from './htmlfiles/partials/header.html';
import footer from './htmlfiles/partials/footer.html';
import border from './htmlfiles/partials/border_hr.html';

import articles_content from './htmlfiles/partials/content/articles_content.html';
import articles_block_content from './htmlfiles/partials/content/articles_block_content.html';

const info = {
    link: '123',
    picture: 'https://img3.goodfon.ru/wallpaper/nbig/c/6f/schenok-schenochek-sobaka-sobachka-3398.jpg',
    description: '123'
}


window.onload = function () {
    document.getElementById("screen").innerHTML = header + border + articles_content + footer;
    var template = articles_block_content;

    var html = mustache.render(template, info);
    document.getElementById("articles_place").innerHTML = html;
}