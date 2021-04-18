
<p align="center" id="project">
<h3 align="center">Prologic WEB</h3>

<p align="center">
  Web App created for building applications in voluntary work in NGOs and in teaching new professionals of Technology

<p align="center">
    <a href="https://github.com/ricardopadua">
      <img src="https://img.shields.io/badge/powered-birdcode-blue.svg?style=flat-square" alt="Nest Powered" />
    </a>
</p>

</p>


<!-- GETTING STARTED -->
## Getting Started
Follow these steps and quickly your application will be running, remember the purpose of this project, be a volunteer and help some institution with your knowledge..

### Prerequisites
* Npm
  ```sh
  npm install -g typescript @vue/cli
  ```

### Installation

1. Clone the repo
```sh
git clone https://github.com/ricardopadua/prologic-web.git
```
2. Install NPM packages
```sh
npm install
```
3. Compiles and hot-reloads for development
```sh
npm run serve
```

4. Compiles and minifies for production
```sh
npm run build
```

5. Lints and fixes files
```sh
npm run lint
```

3. Configure the environment variables in the config folder `/config` , there are 3 configuration files, the `default.json` that represents the development environment, the `production.json` that represents the production environment and the `index.ts` that imports these configured environments and exports these constants to the application. Observe the example respectively:
##### default.json
```json
{
    "cryptography": {
        "passwordDefault": ""
    }
}
```
##### production.json
```json
{
    "cryptography": {
        "passwordDefault": ""
    }
}
```
##### index.ts
```ts
import config from 'config';
//  Cryptography configuration constant
const cryptography = {
    passwordDefault: config.get<string>('cryptography.passwordDefault')
};
const environment = {
    cryptography: cryptography,
}
export default environment;
```

<!-- DOCKER -->
### docker (Optional)
1. If you want to run the application in docker, configure the file docker-compose and after the command `docker-compose up --build -d`
2. Configure the environment variables for containers in `docker-compose.yml`  file:
##### docker-compose.yml
```yml
version: '3.4'
services:
  prologic-web:
    build:
      context: ./
      dockerfile: Dockerfile
      args:
        env: prd
    # HASH_DATETIME=`exec date +%d%m%Y%H%M%S` docker-compose up --build -d
    container_name: prologic-web-${HASH_DATETIME}
    ports:
      - "80:80"
```


<!-- GIST SAMPLE CONFIGURATION -->
## Sample configuration

See the [sample gist configuration](https://gist.github.com/ricardopadua/) for a sample of configuration (environment variables).


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/ricardopadua/prologic-web/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Ricardo Padua - [@RicardoPdua4](https://twitter.com/RicardoPdua4)

Project Link: [https://github.com/ricardopadua/prologic-web](https://github.com/ricardopadua/prologic-web)
