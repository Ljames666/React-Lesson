import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const adapter = createEntityAdapter({
  selectId: (list) => list.id,
});

export const { selectAll, selectById } = adapter.getSelectors((state) => state.listPhone);

const initialState = adapter.getInitialState();

const slice = createSlice({
  name: 'listPhone',
  initialState,
  reducers: {
    addContact: adapter.addOne,
    updateContact: adapter.updateOne,
    removeContact: adapter.removeOne,
    resetAllContact: adapter.removeAll,
  },
});

export const { addContact, updateContact, removeContact, resetAllContact } = slice.actions;
export default slice.reducer;
