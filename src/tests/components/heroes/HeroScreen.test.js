import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
describe('Pruebas en <HeroScreen />', () => {

    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }
    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']}>

            <HeroScreen history={history} />
        </MemoryRouter>
    );

    test('debe mostrar el componente redirect si no hay argumentos en la url', () => {

        expect(wrapper.find('Redirect').exists()).toBe(true);
    });

    test('debe de mostrar un heroe si el parametro existe y se encuentra', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>

                <Route path="/hero/:heroeId" component={HeroScreen} />
            </MemoryRouter>
        );

        expect(wrapper.find('h5').exists()).toBe(true);

    });

    test('debe de regresar a la pantalla anterior con push', () => {
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>

                <Route path="/hero/:heroeId" component={(props) => <HeroScreen history={history} />} />
            </MemoryRouter>
        );

        wrapper.find('button').simulate('click');

        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalledWith('/');
    });

    test('debe de regresar a la pantalla anterior con goBack', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>

                <Route path="/hero/:heroeId" component={(props) => <HeroScreen history={history} />} />
            </MemoryRouter>
        );

        wrapper.find('button').simulate('click');

        expect(history.goBack).toHaveBeenCalled();
        expect(history.push).toHaveBeenCalledTimes(0);
    });

    test('debe devolver string vacio si el heroe no existe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider45464654654']}>

                <Route path="/hero/:heroeId" component={(props) => <HeroScreen history={history} />} />
            </MemoryRouter>
        );
        expect( wrapper.text() ).toBe('');
    })


})
