import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../auth/AuthContext"
import { DashBoardRouter } from "../../routers/DashBoardRouter"


describe('Pruebas en <DasboardRouter', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Lolo'
        }
    }
    test('debe de mostrarse correctamente', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashBoardRouter>

                    </DashBoardRouter>
                </MemoryRouter>
            </AuthContext.Provider>

        );

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('.text-info').text().trim() ).toBe('Lolo');
    })

})
