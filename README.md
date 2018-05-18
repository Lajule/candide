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

## Resources

Some resources have to be copied to `dist` directory, first the favicon must be copied:

```sh
npx shx cp favicon.ico dist
```

`tinymce` editor will not work without a skin, so use this command to get `skins` directory:

```sh
npx shx cp -R node_modules/tinymce/skins dist
```

## Development

```sh
npx parcel index.html
```

## Deployment



## JSON resume


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
