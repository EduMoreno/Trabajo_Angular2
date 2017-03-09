
import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
    apiKey: "AIzaSyAX1IBni0tUwVl1DWghbP_JpxroK_uwagI",
    authDomain: "final-zoo.firebaseapp.com",
    databaseURL: "https://final-zoo.firebaseio.com",
    storageBucket: "final-zoo.appspot.com",
    messagingSenderId: "896858142315"
};


export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
