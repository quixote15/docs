/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: "Ma9",
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: "/img/logo.png",
    infoLink: "https://www.ma9.com.br",
    pinned: true
  }
];

const siteConfig = {
  algolia: {
    apiKey: "a2d7ddd911b6ff2441d893713bfb2cea",
    indexName: "rocketseat",
    placeholder: "Buscar",
    algoliaOptions: {} // Optional, if provided by Algolia
  },

  docsUrl: "",

  stylesheets: [
    "https://fonts.googleapis.com/css?family=Noto+Sans:400,700",
    "https://use.fontawesome.com/releases/v5.8.1/css/all.css"
  ],

  title: "Ma9 Mobile Docs", // Title for your website.
  tagline: "Documentação de guias da Ma9",
  //url: 'https://rocketseat.com.br', // Your website URL
  baseUrl: "/",

  // For github.io type URLs, you would set the url and baseUrl like:
  url: "https://quixote15.github.io",
  baseUrl: "/",

  // Used for publishing and more
  projectName: "docs",
  organizationName: "quixote15",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { page: "contribua", label: "Contribua" },
    { page: "comunidade", label: "Comunidade" }
    // { doc: 'ambiente-react-native/ambiente/introducao', label: 'Docs' }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: "img/logo.png",
  footerIcon: "img/logo.png",
  favicon: "img/favicon.png",

  /* Colors for website */
  colors: {
    primaryColor: "#0083c5",
    secondaryColor: "#0083f9"
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Ma9`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "dracula"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://unpkg.com/feather-icons",
    "/js/script.js"
  ],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/logo.png",
  twitterImage: "img/logo.png"

  //docsSideNavCollapsible: true

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
