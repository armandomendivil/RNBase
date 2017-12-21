import { Constants } from '@common';

const types = {
  SWITCH_LANGUAGE: 'SWITCH_LANGUAGE',
};

export const actions = {
  switchLanguage: (dispatch,lang) => {
    dispatch({type : types.SWITCH_LANGUAGE, lang})
  },
};

const initialState = {
  lang : Constants.Language,
}

export const reducer = (state = initialState, action) => {
  const { lang, payload } = action;
  switch (action.type) {
    case "persist/REHYDRATE" :
      const persistLang = payload.language.lang || 'en';
      return Object.assign({}, state, { lang: persistLang } );
    case types.SWITCH_LANGUAGE:
      return Object.assign({}, state, { lang })
    default:
      return state
  }
}
