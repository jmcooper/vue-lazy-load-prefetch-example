export default function LocalStoragePlugin({ store }) {
  store.$subscribe((mutation, state) => {
    for (const stateKey in state) {
      localStorage.setItem(`${mutation.storeId}-${stateKey}`, JSON.stringify(state[stateKey]))
    }
  })
}