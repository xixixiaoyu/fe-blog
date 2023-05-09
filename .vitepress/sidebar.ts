import { getFolderSidebar, getFile } from './utils'

export default {
	'/books': getFolderSidebar('books'),
	'/algorithm': getFile('algorithm'),
}
