
import { scenes } from "../../constants/scenes";
import { SET_SCENE } from "../actions/scene-action";

const INIT_STATE = {
    'currentScene': scenes.DASHBOARD
}

const sceneReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case SET_SCENE:
            return {
                ...state,
                currentScene: action.payload
            }
        default:
            return state
    }
}

export default sceneReducer;