
// babel.config.js  (Expo automatically injects the Reanimated / worklets plugin when needed)
module.exports = function (api) {
   api.cache(true);
   return {
      presets: ['babel-preset-expo'],
      // ← NO plugins array! No 'react-native-reanimated/plugin' or 'react-native-worklets/plugin'
   };
};
