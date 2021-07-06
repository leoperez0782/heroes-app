import { mount } from "enzyme"
import { AuthContext } from "../../auth/AuthContext";
import { AppRouter } from '../../routers/AppRouter';

describe('Pruebas en <AppRouter />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    };
    test('debe de mostrar el login si no esta autenticado', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>

        );

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar el componente de marvel si esta autenticado', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Lolo'
            }
        };
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>

        );

        expect(wrapper.find('.navbar').exists()).toBe(true);

    })


})
