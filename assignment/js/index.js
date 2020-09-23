const siteContent = {
    nav: {
        'nav-item-1': 'Services',
        'nav-item-2': 'Product',
        'nav-item-3': 'Vision',
        'nav-item-4': 'Features',
        'nav-item-5': 'About',
        'nav-item-6': 'Contact',
        'img-src': 'img/logo.png',
    },
    cta: {
        h1: 'DOM Is Awesome',
        button: 'Get Started',
        'img-src': 'img/header-img.png',
    },
    'main-content': {
        'features-h4': 'Features',
        'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'about-h4': 'About',
        'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'middle-img-src': 'img/mid-page.jpg',
        'services-h4': 'Services',
        'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'product-h4': 'Product',
        'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'vision-h4': 'Vision',
        'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    },
    contact: {
        'contact-h4': 'Contact',
        address: '123 Way 456 Street Somewhere, USA',
        phone: '1 (888) 888-8888',
        email: 'sales@greatidea.io',
    },
    footer: {
        copyright: 'Copyright Great Idea! 2020',
    },
};

const navigation = document.querySelector('nav > a:nth-child(1)');
navigation.textContent = siteContent["nav"]["nav-item-1"];

const navigation2 = document.querySelector('nav > a:nth-child(2)');
navigation2.textContent = siteContent["nav"]["nav-item-2"];


const navigation3 = document.querySelector('nav > a:nth-child(3)');
navigation3.textContent = siteContent["nav"]["nav-item-3"];


const navigation4 = document.querySelector('nav > a:nth-child(4)');
navigation4.textContent = siteContent["nav"]["nav-item-4"];

const navigation5 = document.querySelector('nav > a:nth-child(5)');
navigation5.textContent = siteContent["nav"]["nav-item-5"];

const navigation6 = document.querySelector('nav > a:nth-child(6)');
navigation6.textContent = siteContent["nav"]["nav-item-6"];


var image = document.getElementById("logo-img");
image.setAttribute("src", siteContent["nav"]["img-src"]);


const mainpage = document.querySelector('section.cta > div >h1');
mainpage.textContent = siteContent["cta"]["h1"];

const btn = document.querySelector('section.cta > div > button');
btn.textContent = siteContent["cta"]["button"];

const shuffle_img = document.getElementById('cta-img');
shuffle_img.setAttribute("src", siteContent["cta"]["img-src"]);

const content = document.querySelector('div:nth-child(1) > h4');
content.textContent = siteContent["main-content"]["features-h4"];


const par = document.querySelector('div:nth-child(1) > p');
par.textContent = siteContent["main-content"]["features-content"];


const title = document.querySelector('div:nth-child(2) > h4');
title.textContent = siteContent["main-content"]["about-h4"];


const par2 = document.querySelector(' div:nth-child(2) > p');
par2.textContent = siteContent["main-content"]["about-content"];


const middle = document.getElementById('middle-img');
middle.setAttribute('src', 'img/mid-page.jpg');

const Services_title = document.querySelector('div.bottom-content > div:nth-child(1) > h4');
Services_title.textContent = siteContent["main-content"]["services-h4"];

const Services_content = document.querySelector(' div.bottom-content > div:nth-child(1) > p');
Services_content.textContent = siteContent["main-content"]["services-content"];

const product_title = document.querySelector('div.bottom-content > div:nth-child(2) > h4');
product_title.textContent = siteContent["main-content"]["product-h4"];

const product_content = document.querySelector('div.bottom-content > div:nth-child(2) > p');
product_content.textContent = siteContent["main-content"]["product-content"];

const vision_title = document.querySelector('div.bottom-content > div:nth-child(3) > h4');
vision_title.textContent = siteContent["main-content"]["vision-h4"];

const vision_content = document.querySelector('div.bottom-content > div:nth-child(3) > p');
vision_content.textContent = siteContent["main-content"]["vision-content"];

const contact_title = document.querySelector('section.contact > h4');
contact_title.textContent = siteContent["contact"]["contact-h4"];

const contact_address = document.querySelector('section.contact > p:nth-child(2)');
contact_address.textContent = siteContent["contact"]["address"];

const contact_phone = document.querySelector('section.contact > p:nth-child(3)');
contact_phone.textContent = siteContent["contact"]["phone"];

const contact_email = document.querySelector('section.contact > p:nth-child(4)');
contact_email.textContent = siteContent["contact"]["email"];

const footer_copy = document.querySelector(' footer > p');
footer_copy.textContent = siteContent["footer"]["copyright"];