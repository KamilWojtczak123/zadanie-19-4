import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        tyoe: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function removeComment(text) {
    return {
        type: REMOVE_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComponent(text) {
    return {
        type: EDIT_COMPONRNT,
        text,
        id: uuid.v4()
    }
}

function thumbUpComment(number) {
    return {
        type:THUMB_UP_COMMENT,
        mumber,
        id: uuid.v4()
    }
}

function thumbDownComment(number) {
    return {
        type: THUMB_DOWN_COMMENT,
        number,
        id: uuid.v4();
    }
}
