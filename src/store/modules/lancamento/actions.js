export function createLancRequest(data) {
  return {
    type: '@lancamento/CREATE_LANC_REQUEST',
    payload: {data},
  };
}

export function createLancSuccess(lanc) {
  return {
    type: '@lancamento/CREATE_LANC_SUCCESS',
    payload: {lanc},
  };
}

export function createLancFailure() {
  return {
    type: '@lancamento/CREATE_LANC_FAILURE',
  };
}

export function removeLancFailure(lanc) {
  return {
    type: '@lancamento/REMOVE',
    payload: {lanc},
  };
}
