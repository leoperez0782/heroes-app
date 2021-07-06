import { mount } from "enzyme";
import '@testing-library/jest-dom';
import { MemoryRouter,Router } from "react-router-dom";
import { AuthContext } from "../../../auth/AuthContext";
import { Navbar } from "../../../components/ui/Navbar";
import { types } from "../../../types/types";


describe('Pruebas en <Navbar />', () => {

    const historyMock = {
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn()
    }
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Lolo'
        }
    };
    const wrapper = mount(
        <MemoryRouter>
            <Router history={historyMock}>

                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </Router>
        </MemoryRouter>
    );

    afterEach(()=>{
        jest.clearAllMocks();
    })
    test('deberia de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Lolo');
    });

    test('debe de llamar el logout y usar el history', () => {
        wrapper.find('button').simulate('click');

        expect(contextValue.dispatch).toHaveBeenLastCalledWith({
            type: types.logout
        });

        expect( historyMock.replace).toHaveBeenCalledWith('/login');        
    });



})
