// Requerimos el modulo de path el Html plugin que isntalamos
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const dotenv = require("dotenv-webpack");

const path = require("path");

// Creamos un nuevo modulo que vamos a exportar con esta configuracion
// Vamos a configurar cada unos de los elementos que necesitamos
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },

  // Este elemento resulve las extensiones que vamos a utilizar
  resolve: {
    extensions: [".js", ".jsx"],
  },

  // Se añaden los plugins que necesitamos
  plugins: [
    // pasamo un objeto con la configuracion que necesitamos
    new HtmlWebpackPlugin({
      //Donde esta ubicado el template que tenemos
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].css",
    }),
    new WebpackPwaManifestPlugin({
      //Le pasamos el objeto de configuracion
      name: "FincaApp ",
      shortname: "FincaApp",
      description: "FincaApp permite gestionar la administracion de tu finca.",
      /*  background_color: "#89d7cf", */
      background_color: "#77c043",

      theme_color: "#0D5C63",

      //Array iconos de la aplicacion
      icons: [
        {
          src: path.resolve("src/assets/favicon.png"),
          //Le pasamos todos los tamaños que requerimos
          sizes: [192, 512],
        },
      ],
    }),
    new FaviconsWebpackPlugin("./src/assets/favicon.png"),

    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            "https://maps.arcgis.com/sharing/rest/content/items/3ddd6c4932d649d6996db442e920ceb9/data|res.cloudinary.com"
          ),
          handler: "CacheFirst",
          options: {
            cacheName: "images",
          },
        },
        {
          // Cache para la API
          urlPattern: new RegExp(
            "https://api-covi-19.jorgevelasquez006.now.sh/API/covi19.json|https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief|https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=CO"
          ),
          // Le decimos que primero valla a la red antes de ir a la cache
          // para tener los datos actulizados
          handler: "NetworkFirst",
          //Le pasamos el nombre de la cache api
          options: {
            cacheName: "api",
          },
        },
      ],
    }),
    new dotenv(),
  ],

  // Modulo con las reglas necesarias
  module: {
    rules: [
      {
        // Regla principal
        // Identificacion de los archivos con una expresion regular
        test: /\.(js|jsx)$/,
        // Exclusion de carpetas
        exclude: /node_modules/,
        // Utilizamos el loader de babel instalado
        use: {
          loader: "babel-loader",
        },
      },
      {
        // Regla para trabajar con los archivos html
        test: /\.html$/,
        // Utilizamos el loader de babel instalado
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "assets/[hash].[ext]" },
          },
        ],
      },
    ],
  },
};
