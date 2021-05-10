import { createStore} from "redux";
/*********************************************************************
 * *J'appel la source des reducers index.js dans le dossier Reducers.
 * *Index va compiler tout les reducers et les envoyer dans le store
 * *le store stock tout les reducers
**********************************************************************/
import rootReducer from "./reducers";

export default createStore(rootReducer);
