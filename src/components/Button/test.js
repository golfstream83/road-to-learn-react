import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
    const props = {
        onClick: () => '',
        className: 'button',
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Button { ...props }>Give Me More</Button>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    test('has a valid snapshot', () => {
        const component = renderer.create(
            <Button { ...props }>Give Me More</Button>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('shows text of the button', () => {
        const element = shallow(
            <Button { ...props } >Button</Button>
        );
        expect(element.text()).toEqual('Button');
    });
});