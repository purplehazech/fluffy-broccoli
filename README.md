# fluffy-broccoli

![fluffy broccoli logo](app/images/broccoli.jpg)

This project generates a form based on a JSON-Schema definition and then calls a service to act
upon the contents of the form.

This service then contains some calculation that results in some content which is then
displayed to the user. The user then has the option to copy the results of the calculations
to the clipboard.

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.12.1.

The main form for the page can be tweaked by editing [the schema service](app/scripts/services/schema.js)
and [the form config](app/scripts/services/form.js).
The calculation logic is in [the calculation service](app/scripts/services/calculation.js) with templating
in [the templated-results directive](app/scripts/directives/templatedresults.js).

## Build & development

Run `grunt` for building and `grunt serve` for preview.

Run `docker build -t fluffy-broccoli .`` to create a docker container from `dist/`.

## Testing

Running `grunt test` will run the unit tests with karma.

## Deploy

Running `cf push -b https://github.com/cloudfoundry/staticfile-buildpack.git -p dist/ -m 64M fluffy-broccoli`
will deploy this to a cloudfoundry instance.

Run `docker run -ti --rm -p 8080:80 fluffy-broccoli` to run dockerized nginx exposing this on port 8080.

Or just use rsync to send the files to a static webhost with `rsync -avzr --delete --progress dist/ example.com:/path/to/htdocs`.
