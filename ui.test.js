
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');


async function loadHTML(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

describe('UI tests', () => {
    let window;
    let document;

    beforeEach(async () => {
        const html = await loadHTML(path.resolve(__dirname, 'index.html'));

        const dom = new JSDOM(html);
        window = dom.window;
        document = window.document;
    });

    test('Navigation menu is present on the page', () => {
        const navbar = document.querySelector('.navbar');
        expect(navbar).not.toBeNull();
    });

    test('Background image section is present on the page', () => {
        const bgSection = document.querySelector('.background-image-section');
        expect(bgSection).not.toBeNull();
    });

    test('Contact button is present on the page', () => {
        const contactButton = document.querySelector('.contact-button');
        expect(contactButton).not.toBeNull();
    });

    test('Header logo is present on the page', () => {
        const logo = document.querySelector('.logo');
        expect(logo).not.toBeNull();
    });

    test('Text section is present on the page', () => {
        const textSection = document.querySelector('.text-section');
        expect(textSection).not.toBeNull();
    });
});
