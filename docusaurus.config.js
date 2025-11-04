// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Piracy",
  tagline: "It's illegal cuz they can't tax you!",
  url: "https://piracy.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "gitchking",
  projectName: "PirateLab",
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/ogimage.png",
      algolia: {
        appId: "WYRH3S2A0X",
        apiKey: "844575fe6602771c605001411bc72fc3",
        indexName: "awesome_piracy",
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "Piracy",
        logo: {
          alt: "",
          src: "img/logo.svg",
          srcDark: "img/darklogo.svg",
        },
        items: [
          {
            href: "https://github.com/gitchking/PirateLab",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/gitchking/PirateLab/edit/main/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "UA-131672698-5",
          anonymizeIP: true,
        },
        gtag: {
          trackingID: "UA-131672698-5",
          anonymizeIP: true,
        },
      }),
    ],
  ],
};

module.exports = config;
