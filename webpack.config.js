const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    mode: 'development',

    output: {
        clean:true
        },


    module: {

        rules: [


            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.css$/i,
                exclude: /styles\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]

            },

            {
                test: /styles\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]

            },


            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: 
                {
                    sources: false,
                    minimize: false,
                },   
            },
            {
                test:/\.(png|svg|jpg|gif)$/i,
                use:[
                    {
                    loader: 'file-loader',
                    options:{
                        esModule:false
                    }
                }
                ]
            }   

        ]

    },

    plugins: [
        new HtmlWebPackPlugin({

            template: './src/index.html',
            filename: './index.html'

        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns:[
            {from: './src/assets',to: 'assets/'}
        ]
        }),


    ]
}

