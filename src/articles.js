import './styles/main_style.scss';
import './styles/articles.scss';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import header from './htmlfiles/partials/header.html';
import footer from './htmlfiles/partials/footer.html';
import border from './htmlfiles/partials/border_hr.html';
import pagination from './htmlfiles/partials/pagination.html';

import articles_content from './htmlfiles/partials/content/articles_content.html';
import articles_block_template from './htmlfiles/partials/content/articles_block_template.html';
import articles_tags_template from './htmlfiles/partials/content/articles_tags_template.html';

//articles
let dataArticles = new Promise((resolve, reject) => {

    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let idParam = urlParams.get('tag_id');

    if (idParam === null) {
        fetch('http://localhost:3012/articles').then(data => {
            resolve(data.json());
        })
    } else {
        fetch('http://localhost:3012/filter?tag_id=' + idParam).then(data => {
            resolve(data.json());
        })
    }
});

let makeBlock = async function makeBlock() {
    let templateArticles = articles_block_template;
    let infoArticles = await dataArticles;
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


//tags
let dataTags = new Promise((resolve, reject) => {
    fetch('http://localhost:3012/tags').then(data => {
        resolve(data.json());
    })
});

let makeTags = async function makeTags() {
    let templateTags = articles_tags_template;
    let infoTags = await dataTags;
    let innerBlocks = '';
    
    infoTags.forEach(function (item, i, info) {
        let resultItem = {
            name: item.tag_name,
            count: item.articles_count,
            id: item.tag_id
        }
        innerBlocks += mustache.render(templateTags, resultItem);
    })
    return innerBlocks;
}


//onload
window.onload = async function () {
    $('#screen').html(header + border + articles_content + footer + pagination);

    $('#articles_place').html(await makeBlock());
    $('#articles_tags_place').html(await makeTags());

    // next
    $('.pagination_container_next').click(function () {
        $('.pagination').find('.pagination_container_pagenumber.active').next().addClass('active');
        $('.pagination').find('.pagination_container_pagenumber.active').prev().removeClass('active');
        $('.pagination_container_next').removeClass('active');
    })
    
    // prev
    $('.pagination_container_prev').click(function () {
        $('.pagination').find('.pagination_container_pagenumber.active').prev().addClass('active');
        $('.pagination').find('.pagination_container_pagenumber.active').next().removeClass('active');
        $('.pagination_container_prev').removeClass('active');
    })
  
}

