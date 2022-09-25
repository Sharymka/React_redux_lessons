import { ADD_AUTHOR, ADD_MESSAGE } from '../../../constants/post';
import { postReducer } from '../PostReducer';

describe('testing PostReducer', () => {
    test('Add message', () => {
        const state = {message:'', author: ''};
        const action = {
            type: ADD_MESSAGE,
            payload: 'Hello world',
        }

        const result = postReducer(state, action);
        expect(result).toStrictEqual({message:'Hello world', author: ''})
    });

    test('Add author', () => {
        const state = {message:'', author: ''};
        const action = {
            type: ADD_AUTHOR,
            payload: 'John',
        }

        const result = postReducer(state, action);
        expect(result).toStrictEqual({message:'', author: 'John'})
    })
})