# candide

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

Generate your PDF resume.

## Dependencies

`candide` is a pure client side application built around following libraries:

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

## Build tasks

```json
{
  "mkdir": "shx mkdir -p dist",
  "parcel": "parcel build -d dist index.html",
  "favicon": "shx cp favicon.ico dist",
  "skins": "shx cp -R node_modules/tinymce/skins dist",
  "postinstall": "npm run mkdir && npm run favicon && npm run skins && npm run parcel",
  "start": "hs dist"
}
```

## JSON resume

The application use this JSON model to serialize a resume:

```json
{
  "name": "John Doe",
  "title": "Programmer",
  "skills": "<ul><li>C</li><li>C++</li><li>Go</li><li>PHP</li><li>Javascript</li></ul>",
  "degrees": [
    {
      "school": "Hogwarts",
      "year": "2000",
      "name": "<p>Sprawling Scottish castle and celebrated School of Witchcraft and Wizardry</p>"
    }
  ],
  "experiences": [
    {
      "firm": "My company",
      "client": "My client",
      "from": "2000-06",
      "to": "2010-06",
      "description": "My first job",
      "mission": "<p>My first mission</p>"
    }
  ]
}
```

[1]: https://parceljs.org/ "Parcel"
