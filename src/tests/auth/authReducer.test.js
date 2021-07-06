
import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";


describe('Pruebas en authReducer', () => {
    
    
    test('debe de retornar el estado por defecto', () => {
        
        const state = authReducer({logged: false}, {});
        expect( {logged: false} ).toEqual( state );
    });

    test('debe autenticar y colocar el name del usuario', () => {
        const action ={
            type: types.login,
            payload: {
                name: 'Hernando'
            }
        };
        const state = authReducer({logged: false}, action);
        expect( {state} ).toEqual( 
            {
                state: {
                name: 'Hernando',
                logged: true
            }}
         );
    });
    test('debe de borrar el name del usuario y logged en false', () => {
        const action ={
            type: types.logout,
            
        };
        const state = authReducer({name: 'Hernando',logged: true}, action);
        expect( {logged: false} ).toEqual( state );
    });
    
})
