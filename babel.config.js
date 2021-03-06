module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.ts', '.android.ts', '.ios.tsx', '.android.tsx', '.ts', '.d.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          '#components': './src/components',
          '#dumy': './src/dumy',
          '#typing': './src/types',
          '#screen': './src/screen',
          '#navigation': './src/router',
          '#context': './src/context'
        }
      }
    ]
  ]
};
