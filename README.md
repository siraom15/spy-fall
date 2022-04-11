<div id="top"></div>
<!--
*** Thanks for checking out the spy-fall-client. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">Spy Fall</h1>

  <p align="center">
    A game of Spyfall is made up of several short rounds. In each round the players find themselves in a certain location with a specific role assigned to each player. One player is always a spy who doesn't know where they are.
    <br />
    <a href="https://github.com/siraom15/spy-fall-client"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://spy-fall.netlify.app/#/">View Demo</a>
    ·
    <a href="https://github.com/siraom15/spy-fall-client/issues">Report Bug</a>
    ·
    <a href="https://github.com/siraom15/spy-fall-client/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://spy-fall.netlify.app/#/)

## Object of the Game
The spy's objective is to avoid exposure until the end of a given round or identify the current location. The non-spies' objective is to establish consensus on the identity of the spy and expose him or her.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Vite](https://vitejs.dev/guide/)
* [Vue 3](https://vuejs.org/guide/introduction.html)
* [Tailwind CSS v3](https://tailwindcss.com/docs/configuration)
* [Vue Router v4](https://github.com/vuejs/router)
* [Inter var font](https://github.com/rsms/inter) (self-hosted, woff2, v3.19, with 'preload' attr, check out index.html)
* [Headless UI](https://headlessui.dev/vue/menu) - unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS
* [Heroicons](https://github.com/tailwindlabs/heroicons#vue) - beautiful hand-crafted SVG icons,
by the makers of Tailwind CSS
* [prettier-plugin-tailwindcss](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) - Automatic Class Sorting with Prettier
* [Socket IO](https://socket.io/)
* [vue i18n](https://kazupon.github.io/vue-i18n/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_You also need to install [serverside](https://github.com/siraom15/spy-fall-server)_

1. Clone the repo
   ```sh
   git clone https://github.com/siraom15/spy-fall-client.git
   ```
2. Install NPM packages
   ```sh
    npm i
    npm run dev
    npm run build
    npm run serve
   ```
3. VITE_APP_PORT, VITE_SERVER_URL in `.env`
   ```js
    VITE_APP_PORT=3000
    VITE_SERVER_URL=https://spyfall-sv.herokuapp.com
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

See the [open issues](https://github.com/siraom15/spy-fall-client/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/siraom15/spy-fall-client.svg?style=for-the-badge
[contributors-url]: https://github.com/siraom15/spy-fall-client/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/siraom15/spy-fall-client.svg?style=for-the-badge
[forks-url]: https://github.com/siraom15/spy-fall-client/network/members
[stars-shield]: https://img.shields.io/github/stars/siraom15/spy-fall-client.svg?style=for-the-badge
[stars-url]: https://github.com/siraom15/spy-fall-client/stargazers
[issues-shield]: https://img.shields.io/github/issues/siraom15/spy-fall-client.svg?style=for-the-badge
[issues-url]: https://github.com/siraom15/spy-fall-client/issues
[license-shield]: https://img.shields.io/github/license/siraom15/spy-fall-client.svg?style=for-the-badge
[license-url]: https://github.com/siraom15/spy-fall-client/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[product-screenshot]: ./img/screenshot.png