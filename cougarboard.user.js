// ==UserScript==
// @name         cougarboard message board more prominent
// @namespace    http://tampermonkey.net/
// @version      2026-06-22
// @description  This redoes the layout and puts the message board first and expands all the more posts.
// @author       Jeff Whiting
// @match        https://www.cougarboard.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cougarboard.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const css = `
    @media (max-width: 3000px) and (min-width: 640px) {
        div#home-grid {
            display:flex;
            flex-direction: column;
            align-items: stretch
        }

        div#home-main,div#home-rail,section#home-news {
            display: contents
        }

        section#home-news>cb-article.featured {
            order: 1;
            width: 50%;
        }

        div#home-board {
            order: 2
        }

        div#home-ad-board {
            order: 3
        }

        section#home-podcasts {
            order: 4
        }

        section#home-news>div.news-list {
            order: 5
        }

        div#home-ad-news {
            order: 6
        }

        section#home-news>div.news-list.news-list-2 {
            order: 7
        }

        section#home-news>a.news-more {
            order: 8
        }

        div#home-featured {
            order: 9;
            width: 50%;
        }

        section#home-promos {
            order: 10
        }
    }`;

    const styleTag = document.createElement('style');
    styleTag.id = 'injected-layout-override';
    styleTag.textContent = css;
    document.head.appendChild(styleTag);

    const data = {
        success: true,
        tagId: styleTag.id,
        message: "CSS injected successfully into the document head."
    };
    Array.from(document.getElementsByClassName('board-more')).forEach((e) => e.click());
})();
