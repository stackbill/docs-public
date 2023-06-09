const path = require("path");

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CloudPortal Documentation",
  tagline: "CloudPortal Documentation",
  url: "https://docs.CloudPortal.com", // Enter the URL of the Organization
  baseUrl: "/help/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  // favicon: "img/favicon.ico",
  favicon: "/logo_icon.png",
  organizationName: "CloudPortal", // Enter the Organization Name
  projectName: "docusaurus",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [
            require.resolve(
              "./node_modules/modern-normalize/modern-normalize.css"
            ),
            require.resolve(
              "./node_modules/@ionic-internal/ionic-ds/dist/tokens/tokens.css"
            ),
            require.resolve("./src/css/custom.scss"),
          ],
        },
      }),
    ],
  ],

  plugins: [
    require.resolve("docusaurus-lunr-search"),
    "docusaurus-plugin-sass",
    [
      "docusaurus-plugin-module-alias",
      {
        alias: {
          "styled-components": path.resolve(
            __dirname,
            "./node_modules/styled-components"
          ),
          react: path.resolve(__dirname, "./node_modules/react"),
          "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
          "@components": path.resolve(__dirname, "./src/components"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
      },
      navbar: {
        // title: "CloudPortal",
        logo: {
          alt: "Site Logo",
          src: "/logo_light.png",
          srcDark: `/logo_dark.png`,
          href: "/",
          target: "_self",
          width: 139,
          height: 28,
        },
        items: [
          {
            type: "doc",
            docId: "Index",
            position: "left",
            label: "User Guide",
          },
          {
            type: "doc",
            docId: "plugins",
            label: "Plugins",
            position: "left",
          },
          {
            type: "doc",
            docId: "marketplace",
            label: "MarketPlace Apps",
            position: "left",
          },
          {
            type: "doc",
            docId: "apis",
            label: "APIs",
            position: "left",
          },
          // {
          //   type: "docsVersionDropdown",
          //   position: "right",
          //   dropdownItemsAfter: [{ to: "/versions", label: "All versions" }],
          //   dropdownActiveClassDisabled: true,
          // },
          {
            type: "search",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
            className: "icon-link navbar__item",
          },
        ],
      },
      footer: {
        style: "dark",
        // links: [
        //   {
        //     title: "Docs",
        //     items: [
        //       {
        //         label: "Tutorial",
        //         to: "/docs/intro",
        //       },
        //     ],
        //   },
        //   {
        //     title: "Community",
        //     items: [
        //       {
        //         label: "Stack Overflow",
        //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
        //       },
        //       {
        //         label: "Discord",
        //         href: "https://discordapp.com/invite/docusaurus",
        //       },
        //       {
        //         label: "Twitter",
        //         href: "https://twitter.com/docusaurus",
        //       },
        //     ],
        //   },
        //   {
        //     title: "More",
        //     items: [
        //       {
        //         label: "Blog",
        //         to: "/blog",
        //       },
        //       {
        //         label: "GitHub",
        //         href: "https://github.com/facebook/docusaurus",
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} CloudPortal. All rights reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
