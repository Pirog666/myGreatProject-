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
import articles_block_template from './htmlfiles/partials/content/articles_block_template.html';
import articles_tags_template from './htmlfiles/partials/content/articles_tags_template.html';


let dataArticles = new Promise((resolve, reject) => {
    fetch('http://localhost:3012/articles').then(data => {
        resolve(data.json());
    })
});


let dataTags = new Promise((resolve, reject) => {
    fetch('http://localhost:3012/tags').then(data => {
        resolve(data.json());
    })
});


window.onload = async function () {
    $('#screen').html(header + border + articles_content + footer);

    let templateArticles = articles_block_template;
    let templateTags = articles_tags_template;
    
    let infoArticles = await dataArticles;
    let infoTags = await dataTags;

    function makeBlock() {
        let innerBlocks = '';
        infoArticles.forEach(function (item, i, info) {
            let resultItem = {
                link: "articles_post.html?id=" + item.id,
                picture: item.picture_url,
                name: item.name,
                tags: item.tag_names
            }
            innerBlocks += mustache.render(templateArticles, resultItem);
        })
        return innerBlocks;
    }

    function makeTags() {
        let innerBlocks = '';
        infoTags.forEach(function (item, i, info) {

            let resultItem = {
                name: item.tag_name,
                count: item.articles_count
            }

            innerBlocks += mustache.render(templateTags, resultItem);
        })
        return innerBlocks;
    }

    $('#articles_place').html(makeBlock());
    $('#articles_tags_place').html(makeTags());
}

