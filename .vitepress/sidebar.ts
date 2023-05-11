import { getFolderSidebar, getFile } from './utils'

export default {
	'/books': getFolderSidebar('books'),
	'/algorithm': getFile('algorithm'),
	'/best_practice': getFolderSidebar('best_practice'),
}
