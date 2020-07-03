import * as React from 'react';
import * as Font from 'expo-font';
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import AppSplashScreen from './components/AppSplashScreen';
import { AuthStack, PostAuthStack } from './routes';
import Firebase from './services/Firebase';

const cacheFonts = (fonts: any[] = []) => fonts.map((font: any) => Font.loadAsync(font));

class Main extends React.Component {
    mounted = false;
    state = {
        isLoading: true,
        user: null,
    }

    public progress = [
        ...cacheFonts([
            FontAwesome.font,
        ]),
        new Promise((resolve, reject) => {
            Firebase.auth().onAuthStateChanged((user: any) => {
                this.safeSetState({ user });
                resolve();
            })
        }),
    ];

    // Initialize async
    public init = async () => {
        await cacheFonts([
            FontAwesome.font,
        ]);

        Firebase.auth().onAuthStateChanged((user: any) => {
            this.safeSetState({ user });
        });
    }

    public safeSetState = (stateUpdate: object) => {
        !!this.mounted && this.setState(stateUpdate);
    }

    componentDidMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        const { isLoading, user } = this.state;
        if (isLoading && !user) {
            return <AppSplashScreen
                promises={this.progress as any}
                onComplete={() => this.safeSetState({ isLoading: false })}
            />;
        } else if (!isLoading && !!user) {
            return <PostAuthStack />;
        } else {
            return <AuthStack />;
        }
    }
}

export default Main;
