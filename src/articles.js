import './styles/main_style.scss';
import './styles/articles.scss';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import header from './htmlfiles/partials/header.html';
import footer from './htmlfiles/partials/footer.html';
import border from './htmlfiles/partials/border_hr.html';

import articles_content from './htmlfiles/partials/content/articles_content.html';
import articles_block_content from './htmlfiles/partials/content/articles_block_content.html';


const info = []; // объявление массива
// в будущем массив объектов с краткой информацией о статье
// будет будет приходить с сервера 
info[0] = {
    link: 'articles_post.html?id=473',
    picture: 'https://img3.goodfon.ru/wallpaper/nbig/c/6f/schenok-schenochek-sobaka-sobachka-3398.jpg',
    description: 'lol1'
}
info[1] = {
    link: 'articles_post.html?id=472',
    picture: 'https://img3.goodfon.ru/wallpaper/nbig/c/6f/schenok-schenochek-sobaka-sobachka-3398.jpg',
    description: 'lol2'
}
info[2] = {
    link: 'articles_post.html?id=471',
    picture: 'https://img3.goodfon.ru/wallpaper/nbig/c/6f/schenok-schenochek-sobaka-sobachka-3398.jpg',
    description: 'lol3'
}


window.onload = function () {
    $('#screen').html(header + border + articles_content + footer);
    let template = articles_block_content;

    function makeBlock() {
        let innerBlocks = '';
        info.forEach(function (item, i, info) {
            innerBlocks += mustache.render(template, item);
        })
        return innerBlocks;
    }
    $('#articles_place').html(makeBlock());
}