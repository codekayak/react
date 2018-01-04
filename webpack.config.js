var webpack=require('webpack');

module.exports={
  entry:"./src/index.js",
  output:{
    path:__dirname + "/dist/assets",
    filename:"index.min.js"
  },
  devServer:{
    inline:true,
    contentBase:"./dist",
    port:3000
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude:/(node_modules)/,
        loader:'babel-loader',
        query:{
          presets:['latest','react','stage-0']
        }
      }
    ]
  }
}