import {ADD_COMMENT} from './actions'
import {REMOVE_COMMENT} from './actions'
import {EDIT_COMMENT} from './actions'
import {Thumb_UP_COMMENT} from './actions'
import {THUMB_DOWN_COMMENT} from './actions'

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_COMMENT:
            return Object.assign({}, state, {
                cpmments: [
                    id: action.id,
                    Text: action.type,
                    votes: 0
                
                , state]
            })
        case REMOVE_COMMENT: 
            return Object.assign({}, state {
                comments: state.comments.filter(comment => comment.id != action.id)
            })
        case EDIT_COMMENT:
            return Object.assign({}, state {
                comments:                  
            })    
        
        case THUMB_DOWN_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    id: action.id,
                    number: action.number,
                    votes--
                ]
            })
    case THUMB_UP_COMMENT:
            return Object.assign({}, state {
                comments: [
                    id: action.id,
                    number: action.number,
                    votes++
            })
            }
        default:
            return state;
    }
}