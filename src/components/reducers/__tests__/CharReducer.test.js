import { jest } from '@jest/globals';
import { ADD_CHAT, ADD_POST, DELETE_POST } from '../../../constants/chats';
import { chatsReducer } from '../ChatReducer';

describe('Reducers | ChatReducer', () => {
    test('should add post to messageList', () => {
        jest.useFakeTimers();

        const chatId = '1';
        const state = { [chatId]: { messageList: [] } };
        const action = {
            type: ADD_POST,
            chatId,
            payload: { author: 'John', message: 'hello' }
        }

        const result = chatsReducer(state, action);

        const messageList = result[chatId].messageList;

        expect(messageList.length).toStrictEqual(1);
        expect(messageList[0]).toStrictEqual({ 
            author: 'John', 
            message: 'hello', 
            id: new Date().getTime() 
        })
    });

    test('should delete post from messageList', () => {
        jest.useFakeTimers();

        const chatId = '1';
        const state = { [chatId]: { messageList: [{
            author: 'John', 
            message: 'hello', 
            id: 123456789
    }] } };
        const action = {
            type: DELETE_POST,
            chatId,
            postId: 123456789
        }

        const result = chatsReducer(state, action);

        const messageList = result[chatId].messageList;

        expect(messageList.length).toStrictEqual(0);
    });

    test('should add chat', () => {
        jest.useFakeTimers();

        const chatId = '1';
        const state = {};
        const action = {
            type: ADD_CHAT,
            payload: {
                id: 1
            },
        }

        const result = chatsReducer(state, action);

        expect(result[chatId]).toStrictEqual({ id: 1 });
    });

    test('should return inital state on unknown action', () => {
        const state = { id: 1 };
        const action = { type: 'unknown_action' }

        const result = chatsReducer(state, action);

        expect(result).toStrictEqual({ id: 1 });
    })
})