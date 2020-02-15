/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  View,
  StatusBar,
  Switch,
  Platform,
} from 'react-native';

import {
  Header,
} from 'react-native/Libraries/NewAppScreen';

import { BlurView } from '@react-native-community/blur';

const App = () => {
  const [enabled, setEnabled] = React.useState(true);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>

        <View style={{ margin: 10, borderColor: 'red', borderWidth: 2 }}>
          <Header />

          {enabled && (
            <BlurView
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                ...Platform.select({
                  android: {
                    marginRight: 3,
                    marginBottom: 1,
                  },
                }),
              }}
              blurType="light"
              blurAmount={10}
            />
          )}

        </View>

        <Switch
          style={{ margin: 10 }}
          value={enabled}
          onValueChange={(value) => setEnabled(value)}
        />

      </SafeAreaView>
    </>
  );
};

export default App;
