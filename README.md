# candide

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

Pure client side application that generate PDF resume.

## Dependencies

`candide` application is built around following libraries:

Library | Purpose
------- | -------
angular | MVW framework
angular-translate | Translation anular module
tinymce | WYSIWYG editor
flatpickr | Powerful datetime picker
codemirror | Versatile text editor
jspdf | PDF generation
normalize.css | CSS reset
milligram | Minimalist CSS framework
font-awesome | Iconic font
balloon-css | CSS tooltips

## Bundler

[Parcel][1] bundler is used to build the application, use the following command to bundle all assets (HTML, images, scripts and styles):

```sh
npx parcel build index.html
```

> Several transformations ares applied, Babel transforms ES6 files and PostCSS stylesheets.

## Resources



## Development

```sh
npx parcel index.html
```

## Deployment



## JSON resume


```json
{
  "name": "",
  "title": "",
  "skills": "",
  "degrees": [
    {
      "school": "",
      "year": "",
      "name": ""
    }
  ],
  "experiences": [
    {
      "firm": "",
      "client": "",
      "from": "",
      "to": "",
      "description": "",
      "mission": ""
    }
  ]
}
```

[1]: https://parceljs.org/ "Parcel"
