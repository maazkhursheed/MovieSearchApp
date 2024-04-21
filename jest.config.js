module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '<rootDir>/node_modules/@testing-library/react-native/cleanup-after-each'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-native-button|react-native-vector-icons|react-native-linear-gradient|react-native-elements)/)'
  ]
};
