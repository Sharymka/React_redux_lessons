import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../store';
import FormPropsTextFields from '../FormPropsTextFields';
import MessageInput from '../MessageInput';

describe('testing FormPropsTextFields', () => {
  test('testing Send message', async () => {
        render(<Provider store = {store}><FormPropsTextFields>
          <MessageInput/></FormPropsTextFields></Provider>
        );
       

        const inputMessage = screen.getByTestId('inputMessage');

        await userEvent.type(inputMessage, 'test input value');

        expect(inputMessage).toHaveDisplayValue('test input value');

        screen.debug();

});

})