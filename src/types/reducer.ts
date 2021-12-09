type ReducerActionBase<Type> = {
  type: Type;
};

export type ReducerAction<Type, Payload> = ReducerActionBase<Type> & {
  payload: Payload;
};
