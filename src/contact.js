import './styles/main_style.scss';
import './styles/main_n_contact.scss';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import header from './htmlfiles/partials/header.html';
import footer from './htmlfiles/partials/footer.html';
import border from './htmlfiles/partials/border_hr.html';

import contact_content from './htmlfiles/partials/content/contact_content.html';

window.onload = function () {
    $('#screen').html(header + border + contact_content + footer);
}