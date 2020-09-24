import './styles/main_style.scss';
import './styles/articles.scss';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import * as mustache from 'mustache';

import header from './htmlfiles/partials/header.html';
import footer from './htmlfiles/partials/footer.html';
import border from './htmlfiles/partials/border_hr.html';

import articles_content from './htmlfiles/partials/content/articles_content.html';
import articles_block_content from './htmlfiles/partials/content/articles_block_content.html';


const info = []; // объявление массива
 
info[0] = {
    link: 'articles_post.html',
    picture: 'https://img3.goodfon.ru/wallpaper/nbig/c/6f/schenok-schenochek-sobaka-sobachka-3398.jpg',
    description: 'lol1'
}
info[1] = {
    link: 'articles_post.html',
    picture: 'https://img3.goodfon.ru/wallpaper/nbig/c/6f/schenok-schenochek-sobaka-sobachka-3398.jpg',
    description: 'lol2'
}
info[2] = {
    link: 'articles_post.html',
    picture: 'https://img3.goodfon.ru/wallpaper/nbig/c/6f/schenok-schenochek-sobaka-sobachka-3398.jpg',
    description: 'lol3'
}

window.onload = function () {
    document.getElementById("screen").innerHTML = header + border + articles_content + footer;
    let template = articles_block_content;

    let html0 = mustache.render(template, info[0]);
    let html1 = mustache.render(template, info[1]);
    let html2 = mustache.render(template, info[2]);
    document.getElementById("articles_place").innerHTML = html0 + html1 + html2;
}
console.log($);