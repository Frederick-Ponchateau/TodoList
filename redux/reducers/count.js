/*************************************************
 * * Initialisation de mon Reducers pour compter 
 *************************************************/

const initialState = {
    nbCount : 25
};
const count = (state = initialState, action) => {
    console.log("state :",state,"action :",action);
    return state;
}
export default count;