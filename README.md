# Botyo Example Project
![npm](https://img.shields.io/npm/l/botyo.svg)

This is an example project for [Botyo](https://github.com/ivkos/botyo) demonstrating how to configure and run a 
Facebook group chat bot.

The project has the following Botyo modules installed:
* [Instagram Bundle](https://github.com/ivkos/botyo-bundle-instagram)
* [Persistence Bundle](https://github.com/ivkos/botyo-bundle-persistence)
* [Ping Command](https://github.com/ivkos/botyo-command-ping)
* [Quote Command](https://github.com/ivkos/botyo-command-quote)
* [Reverse Image Search Command](https://github.com/ivkos/botyo-command-reverse-image-search)
* [ShowMe Command](https://github.com/ivkos/botyo-command-showme)
* [Spotify Command](https://github.com/ivkos/botyo-command-spotify)
* [YouTube Command](https://github.com/ivkos/botyo-command-youtube)

Please refer to their project pages for configuration options.

This project can be run inside a multi-container Docker Compose environment, or natively.


## Requirements
* Node.js 8.3.0+
* MongoDB 3.0+ (required for the [Persistence Bundle](https://github.com/ivkos/botyo-bundle-persistence))
* Docker 17.06.0+ & Docker Compose (optional unless you're running Botyo inside Docker)


## Download
```bash
git clone https://github.com/ivkos/botyo-example.git
```


## Configuration
First, before running Botyo, you need copy the provided example configuration file, and edit it using your favorite 
text editor:
```bash
cp config_example.yaml config.yaml
nano config.yaml
```


## Running Botyo
Install the dependencies:
```bash
npm install
```

Build:
```bash
npm run build
```

Then run Botyo:
```bash
npm run start
```


## Running Botyo inside Docker
Edit the configuration file following its recommendations for running inside Docker.
```bash
nano config.yaml
```

Start the multi-container Docker Compose application:
```bash
docker-compose up
```
This will build all relevant Docker images, and then start Botyo.

## Experiment & Extend
Study the structure of the project, its source files, configuration, and Docker files to learn what a working 
instance of Botyo consists of. Experiment with writing your own modules and extending Botyo.