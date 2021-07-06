import { mount } from "enzyme"
import { AuthContext } from "../../../auth/AuthContext";
import { LoginScreen } from "../../../login/LoginScreen";
import { types } from "../../../types/types";


describe('Pruebas en <Login />', () => {
    
    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
        replace: jest.fn()
    }
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false,
            
        }
    };
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginScreen history={history}/>
        </AuthContext.Provider>

    );
    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('debe de realizar el dispatch y la navegacion', () => {
        
        const handleClick = wrapper.find('button').prop('onClick');

        handleClick();

        expect( contextValue.dispatch ).toHaveBeenLastCalledWith({
            type: types.login,
            payload: {
                name: 'Leonardo'
            }
        });

        expect( history.replace ).toHaveBeenCalledWith('/');

        localStorage.setItem('lastPath','/dc');
        handleClick();
        expect( history.replace ).toHaveBeenCalledWith('/dc');
    });
    
})
