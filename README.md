ASSIGNMENT TASKS :
1- Write a small web app using expo web
    Feel free to use: npx create-expo-app@latest ginmon-assignment --template expo-template-blank-typescript && cd ginmon-assignment && npx expo install react-dom react-native-web @expo/metro-runtime && npm run web
2- The goal is to implement the desktop design on screens >= 700 and mobile design on smaller screens. (email attachments)
3- Feel free to use react-responsive (or other lib that you prefer)
4- There is one interactive part (updating shown index depending on selected card)
5- There is (at least) one scrollable part


SOLUTION :

- Created App using => npx create-expo-app@latest ginmon-assignment --template expo-template-blank-typescript
- Installed these packages =>  npx expo install react-dom react-native-web

- Installed expo router => npm install expo-router (TO USE FILE BASED ROUTING THAT EXPO PROVIDES)
- Changed Folder structure that can support file based routing src->app->_layout.tsx , moved App.tsx under -src->app folder
- Made components folder and created genericButton component so I can use it further   