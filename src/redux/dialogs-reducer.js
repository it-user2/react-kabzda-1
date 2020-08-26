const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: '1', name: 'Dimych', avatarUrl: 'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png'},
        {id: '2', name: 'Andrey', avatarUrl: 'https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png'},
        {id: '3', name: 'Sveta', avatarUrl: 'https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png'},
        {
            id: '4',
            name: 'Sasha',
            avatarUrl: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png'
        },
        {id: '5', name: 'Victor', avatarUrl: 'https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png'},
        {
            id: '6',
            name: 'Valera',
            avatarUrl: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png'
        },
    ],

    messages: [
        {id: '1', message: 'Hi', my: true},
        {id: '2', message: 'How is your ...', my: false},
        {id: '3', message: 'Yo', my: true},
        {id: '4', message: 'Yo', my: false},
        {id: '5', message: 'Yo', my: true},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;

            return {
                ...state,
                messages: [...state.messages, {id: '6', message: body, my: true}]
            };

        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;