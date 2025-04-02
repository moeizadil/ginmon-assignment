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

- Made Main Screen , On which I can show 2 Cards i- Question Card ii- Answer Card

- Made  components QuestionCard, AnswerCArd, so I can map thorugh and show the cards on screen 

- Data folder -> To have hardcoded dummy data 
- styles folder to have styles classes , (seperate for each component/screen)
-Used react-reactive to determine pixels using hook (useMediaQuery) so I come to know whether it is desktop or mobile  
- Conditonal rendering after getting know booolean value of IsDesktop
- Made BaseMainScreen , all the logic to show the cards are there, child components(AnswerCard, QuestionCard were also present  there)
- USed react-native-size-matters to dynamically allocate the percentages of width and height to the properties , so reactiveness can be achieved.