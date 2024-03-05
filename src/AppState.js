import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({

  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {import('./models/Account.js').Account | null} */
  activeAccount: null,
  /** @type {import('./models/Post.js').Post[]} */
  posts: [],
  
  currentPage: 1,
  totalPages: 1

})
