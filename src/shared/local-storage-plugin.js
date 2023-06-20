import { toRef } from 'vue'

export default function LocalStoragePlugin({ store }) {
  for (const localStorageKey in localStorage) {
    if (!localStorageKey.startsWith(`persisted-${store.$id}-`))
      continue

    const storeKey = localStorageKey.split('-')[2]

    store.$state[storeKey] = JSON.parse(localStorage.getItem(localStorageKey))
    store[storeKey] = toRef(store.$state, storeKey)

    // Note: Be aware of conflicts if using SSR and populating the state from
    //       server-side data. Need to research this more. Docs say to use:
    // if (1Object.prototype.hasOwnProperty.call(store.$state, storeKey)) {
    // }
  }

  store.$subscribe((mutation, state) => {
    console.log('mutation', mutation.storeId, state)
    for (const stateKey in state) {
      localStorage.setItem(`persisted-${mutation.storeId}-${stateKey}`, JSON.stringify(state[stateKey]))
    }
  })
}