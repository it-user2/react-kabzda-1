import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

// 1. Test data (Исходные данные)
let state = {
    posts: [
        {id: '1', message: 'Hi, how are you ?', likesCount: 10},
        {id: '2', message: 'It\'s my first post!', likesCount: 3},
        {id: '3', message: 'Blabla', likesCount: 3},
        {id: '4', message: 'Dada', likesCount: 3}
    ]
};

it('Length of posts should be incremented', () => {
    // 1. Test data (Исходные данные)
    let action = addPostActionCreator('Hello, world!!!');

    // 2. Action (Действие)
    let newState = profileReducer(state, action);

    // 3. Expectation (Ожидание)
    expect(newState.posts.length).toBe(5);
});

it('Message of new post should be correct', () => {
    // 1. Test data (Исходные данные)
    let action = addPostActionCreator('Hello, world!!!');

    // 2. Action (Действие)
    let newState = profileReducer(state, action);

    // 3. Expectation (Ожидание)
    expect(newState.posts[4].message).toBe('Hello, world!!!');
});

it('After deleting messages length should be decremented', () => {
    // 1. Test data (Исходные данные)
    let action = deletePost(1);

    // 2. Action (Действие)
    let newState = profileReducer(state, action);

    // 3. Expectation (Ожидание)
    expect(newState.posts.length).toBe(3);
});

it('After deleting messages length should\'t be decremented if postId is incorrect', () => {
    // 1. Test data (Исходные данные)
    let action = deletePost(28374924);

    // 2. Action (Действие)
    let newState = profileReducer(state, action);

    // 3. Expectation (Ожидание)
    expect(newState.posts.length).toBe(4);
});

