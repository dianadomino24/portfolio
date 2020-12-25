import '@fortawesome/fontawesome-free/js/all.min'
import './index.css'
import debounce from 'lodash/debounce'

const toTopButton = document.querySelector('.button_type_to-top')

const scrollTo = (selector) => {
    document.getElementById(selector).scrollIntoView(true)
}

const showToTopButton = () => {
    if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
    ) {
        toTopButton.classList.remove('button_hidden')
    } else {
        toTopButton.classList.add('button_hidden')
    }
}

window.addEventListener(
    'scroll',
    debounce(() => showToTopButton(), 200)
)

toTopButton.addEventListener('click', () => {
    scrollTo('header')
})
