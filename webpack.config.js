const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var webpack = require("webpack");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './main.js',
        contact: './contact.js',
        articles: './articles.js',
        articles_post: './articles_post.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        
        new HTMLWebpackPlugin({
            filename: 'main_page.html',
            template: './htmlfiles/main_page.html',
            chunks: ['main']
        }),
        new HTMLWebpackPlugin({
            filename: 'contact.html',
            template: './htmlfiles/contact.html',
            chunks: ['contact']
        }),
        new HTMLWebpackPlugin({
            filename: 'articles.html',
            template: './htmlfiles/articles.html',
            chunks: ['articles']
        }),
        new HTMLWebpackPlugin({
            filename: 'articles_post.html',
            template: './htmlfiles/articles_post.html',
            chunks: ['articles_post']
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader',
                    'sass-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: 'html-loader',
                    options: {
                      minimize: true,
                    }
                  }
                ]
              }
        ]
    }
}