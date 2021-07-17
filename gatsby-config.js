module.exports = {
  siteMetadata: {
    siteUrl: "https://jbithell.com",
    title: "James Bithell",
    personalDetails: {
      name: "James Bithell",
      location: "Bristol, United Kingdom",
      company: {
        jobTitle: "Full Stack Developer",
        name: "Intuety",
        url: "https://intuety.io"
      }
    }
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-26373319-4",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/img/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/img/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [{
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 800,
          },
        }],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/posts/`,
      },
      __key: "pages",
    },
    "gatsby-plugin-postcss",
  ],
};
