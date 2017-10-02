
# readmer-cli

<p align="center">
  <i>Create simple Readme files automatically</i>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/readmer-cli"><img src="https://img.shields.io/npm/dt/readmer-cli.svg" /></a>
</p>

## Install

```bash
npm install -g readmer-cli
```

## Usage

Use `readmer -h`  to display this help:

```
  Usage: readmer [options] [command]

  Commands:
    help  Display help

  Options:
    -g, --gravatar  A gravatar email to retrieve a profile picture
    -h, --help      Output usage information
    -v, --version   Output the version number

  Examples:
    - Show simple readme file
    $ readmer

    - Create README.md
    $ readmer > README.md

    - Create README.md fo the parent directory
    $ readmer ../package.json > ../README.md

    - Create readme.md with the author's gravatar
    $ readmer -g me@example.com > readme.md
```

## Contribute

Feel free to open an _issue_ or a _PR_.

>NOTE: For issues regarding the markdown output, data options, etc, refer to the [API repo](https://github.com/pablopunk/readme).

## Related

API for this module => [readmer](https://github.com/pablopunk/readmer)
Minimal node boilerplate => [miny](https://github.com/pablopunk/miny)

## Author

| ![me](https://www.gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?s=100)|
| -----------------------------------------------------------------------------|
| © 2017 [__Pablo Varela__](http://pablo.life)                                 |

