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


let data = new Promise((resolve, reject) => {
    fetch('http://localhost:3012/articles').then(data => {
        resolve(data.json());
    })
});


window.onload = async function () {
    $('#screen').html(header + border + articles_content + footer);
    let template = articles_block_content;
    let info = await data;

    function makeBlock() {
        let innerBlocks = '';
        info.forEach(function (item, i, info) {

            let resultItem = {
                link: "articles_post.html?id=" + item.id,
                picture: item.picture_url,
                name: item.name,
                tags: '#временно'
            }

            innerBlocks += mustache.render(template, resultItem);
        })
        return innerBlocks;
    }
    $('#articles_place').html(makeBlock());
}

