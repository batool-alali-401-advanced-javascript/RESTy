import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../components/Form/form.js';


describe('<Form/>', () => {
    it('is alive at application start', () => {
      const form = shallow(<Form />);
      expect(form.find('main').exists()).toBeTruthy();
    });
    it('changes method on click on GET', () => {
      const form = mount(<Form />);
      const button = form.find('#get');
      button.simulate('click');
      expect(form.state('method')).toBe('get');
    });
    it('changes method on click on POST', () => {
        const form = mount(<Form />);
        const button = form.find('#post');
        button.simulate('click');
        expect(form.state('method')).toBe('post');
      });
      it('changes method on click on PUT', () => {
        const form = mount(<Form />);
        const button = form.find('#put');
        button.simulate('click');
        expect(form.state('method')).toBe('put');
      });
      it('changes method on click on DELETE', () => {
        const form = mount(<Form />);
        const button = form.find('#delete');
        button.simulate('click');
        expect(form.state('method')).toBe('delete');
      });
      it('changes URL on Change the input', () => {
        const form = mount(<Form />);
        const input = form.find('.urlInput');
        input.simulate('change', { target: { value: 'http://localhost:3000' } });
        expect(form.state('url')).toBe('http://localhost:3000');
      });
      it('changes the full request on click Go!', () => {
        const form = mount(<Form />);
        const go = form.find('#go');
        const input = form.find('.urlInput');
        input.simulate('change', { target: { value: 'http://localhost:3000' } });
        const button = form.find('#delete');
        button.simulate('click');
        go.simulate('click');
        expect(form.state('full')).toBe("delete     http://localhost:3000 ");
      });


  
    it('Renders correctly', () => {
      const tree = renderer.create(<Form />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });