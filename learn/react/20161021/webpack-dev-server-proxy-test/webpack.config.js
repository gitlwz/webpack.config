var webpack = require('webpack');
module.exports = {
	entry: './src/main.js',
	output: {
		path: './',
		filename: 'index.js'
	},
	devServer: {
		historyApiFallback: true,
      	hot: true,
		inline: true,
		stats: { colors: true },
		proxy: {
			///list/column  --> http://10.2.130.20:9000/column
	        '/list': {
	          target: 'http://10.2.130.20:9000',
	          pathRewrite: {'^/column' : '/column'},
	          changeOrigin: true
	        },
	        ///ok/ok  --> http://pod.gf.com.cn/api/information/podcastserver/1.0.0/episodes/category/57959fd6b05063000b284f58?page_no=1&page_size=1
	        '/ok':{
	        	target: 'http://pod.gf.com.cn/api/information/podcastserver/1.0.0',
	        	pathRewrite: {'^/ok':'/episodes/category/57959fd6b05063000b284f58?page_no=1&page_size=10'},
	        	changeOrigin: true
	        },
			
	        //	/categories -->http://pod.gf.com.cn/categories/information/podcastserver/1.0.0/categories
	        '/*': {
	        	target: 'http://www.runoob.com',
	        	// pathRewrite: {'^/categories': '/try/ajax/demo_test.php'},
	        	changeOrigin: true
	        }
			// http://localhost:8080/api/getUser.php

			// http://user.reekly.com/campaign_huggies/t3store_freeuse/admin/getUser.php
	       //  '/api': {
        //   target: 'http://huggies.kmapp.net',
        //   pathRewrite: {'^/api' : '/campaign_huggies/t3store_freeuse/admin'},
        //   changeOrigin: true
        // }


	     }
	},
	plugins: [new webpack.ProvidePlugin({
		$: 'n-zepto'
	})],
	module: {
		loaders: 
		[
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015','react']
				}
			},{
				test: /\.(jpg|png|gif)$/,
				loader: 'url-loader?limit=8192'
			},{
				test: /\.scss/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		]
	}
};