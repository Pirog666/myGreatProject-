import './styles/main_style.scss';
import './styles/articles_post.scss';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import header from './htmlfiles/partials/header.html';
import footer from './htmlfiles/partials/footer.html';
import border from './htmlfiles/partials/border_hr.html';

import articles_post_content from './htmlfiles/partials/content/articles_post_content.html';

window.onload = function () {
    document.getElementById("screen").innerHTML = header + border + articles_post_content;
}
