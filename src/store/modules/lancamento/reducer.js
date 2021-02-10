import produce from 'immer';

const INITIAL_STATE = {
  lanc: [],
};
export default function lancamento(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@lancamento/CREATE_LANC_SUCCESS': {
        const {lanc} = action.payload;
        draft.lanc.push(lanc);
        break;
      }
      case '@lancamento/REMOVE': {
        const {lanc} = action.payload;

        const lancIndex = draft.lanc.findIndex((p) => p.id === lanc.id);
        // console.tron.log(lancIndex);

        if (lancIndex >= 0) {
          draft.lanc.splice(lancIndex, 1);
        }
        break;
      }
      default:
    }
  });
}
