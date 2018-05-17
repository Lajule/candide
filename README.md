# candide

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

Pure client side application that generate PDF resume.

## Dependencies

`candide` application is built around following Javascript libraries:

Library | Purpose
------- | -------
angular | MVW framework
angular-translate | Translation anular module
tinymce | WYSIWYG editor
flatpickr | Powerful datetime picker
codemirror | Versatile text editor
jspdf | PDF generation

The application also use these CSS libraries:

Library | Purpose
------- | -------
normalize.css | CSS reset
milligram | Minimalist CSS framework
font-awesome | Iconic font
balloon-css | CSS tooltips

## Bundler

[Parcel][1] bundler is used to build the application

```sh
npx parcel build index.html
```





[1]: https://parceljs.org/ "Parcel"
