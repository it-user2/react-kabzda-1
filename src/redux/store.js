import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi, how are you ?', likesCount: 10},
                {id: '2', message: 'It\'s my first post!', likesCount: 3},
                {id: '3', message: 'Blabla', likesCount: 3},
                {id: '4', message: 'Dada', likesCount: 3}
            ],

            newPostText: 'it-kamasutra.com'
        },

        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Dimych', avatarUrl: 'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png'},
                {id: '2', name: 'Andrey', avatarUrl: 'https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png'},
                {id: '3', name: 'Sveta', avatarUrl: 'https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png'},
                {id: '4', name: 'Sasha', avatarUrl: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png'},
                {id: '5', name: 'Victor', avatarUrl: 'https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png'},
                {id: '6', name: 'Valera', avatarUrl: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png'},
            ],

            messages: [
                {id: '1', message: 'Hi', my: true},
                {id: '2', message: 'How is your ...', my: false},
                {id: '3', message: 'Yo', my: true},
                {id: '4', message: 'Yo', my: false},
                {id: '5', message: 'Yo', my: true},
            ],

            newMessageBody: 'YoYoYo'
        },

        sidebar: {
            friends: [
                {id: '1', name: 'Dimych', avatarUrl: 'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png'},
                {id: '3', name: 'Sveta', avatarUrl: 'https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png'},
                {id: '6', name: 'Valera', avatarUrl: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png'},
            ]
        }
    },
    _callSubscriber () {
        console.log('State changed.');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;          //Паттерн Observer (наблюдатель).
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;