# ♟️ Chess Training Blog - Angular Project

This is a personal project built with Angular to document and share my journey back into chess training. The blog is a lightweight, modern, and responsive Single Page Application (SPA).

## 📌 Purpose

The goal is to log my training progress, lessons learned, and thoughts — especially while studying books, solving puzzles, and preparing for tournaments. It also serves as a front-end development practice project using Angular.

## 🚀 Features

- View detailed posts with safe HTML rendering.
- Home page shows the most recent blog posts.
- "About" page with personal background.
- Navigate between posts (next/previous buttons).
- Responsive and modern layout with custom CSS.
- Static mock data from `assets/mocks/posts.mock.json`.
- SEO-friendly URLs based on post slugs.

## 🧩 Technologies Used

- [Angular 17+](https://angular.io/)
- TypeScript
- HTML5 + CSS3
- RxJS
- Angular Router
- DomSanitizer (for safe HTML rendering)


## 📝 How to Add a New Post

1. Open the file:  
   `assets/mocks/posts.mock.json`

2. Add a new object with the following format:

    ```json
    {
    "index": 5,
    "slug": "my-new-post",
    "title": "My New Post",
    "content": "<p>This is the content of my new post...</p>"
    }

 
 - index: used to sort posts (higher = more recent).

 - slug: used in the post URL (/post/my-new-post).

 - title: the post’s title.

 - content: the post’s HTML body.

 Made with ❤️ by Isabella Conti
