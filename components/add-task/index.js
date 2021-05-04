import React from 'react';
import Prompt from 'rn-prompt';
 
// Inside render()
const AddTask = ({promptVisible, cancelPromts,onSubmitCallBack})=> {
    return(
        
        <Prompt
        title="Ajouter une nouvelle tache"
        placeholder="Saisir une tache"
        defaultValue="Delelte Dope Boy"
        visible={promptVisible}
        onCancel={() => cancelPromts()}
        onSubmit={(value) =>onSubmitCallBack(value)}
        />
    )
}
    export default AddTask; 