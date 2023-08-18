/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "skQTkx48uYwDtk2Gd3LoRK",
        token: "oR5tmIermMAozkfDBzI5IMepM6hFl8TcR1L89XBL1cCFP2Qe9JxCoB2sniPzHMW6CTNUI5vWcsfXj5SZEQ",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.jsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}
