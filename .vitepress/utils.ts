import fs from 'fs'
import path from 'path'

export const biliSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="20" height="20"  viewBox="0 0 512 512" >
<path fill="currentColor" d="M488.6 104.1c16.7 18.1 24.4 39.7 23.3 65.7v202.4c-.4 26.4-9.2 48.1-26.5 65.1c-17.2 17-39.1 25.9-65.5 26.7H92.02c-26.45-.8-48.21-9.8-65.28-27.2C9.682 419.4.767 396.5 0 368.2V169.8c.767-26 9.682-47.6 26.74-65.7C43.81 87.75 65.57 78.77 92.02 78h29.38L96.05 52.19c-5.75-5.73-8.63-13-8.63-21.79c0-8.8 2.88-16.06 8.63-21.797C101.8 2.868 109.1 0 117.9 0s16.1 2.868 21.9 8.603L213.1 78h88l74.5-69.397C381.7 2.868 389.2 0 398 0c8.8 0 16.1 2.868 21.9 8.603c5.7 5.737 8.6 12.997 8.6 21.797c0 8.79-2.9 16.06-8.6 21.79L394.6 78h29.3c26.4.77 48 9.75 64.7 26.1zm-38.8 69.7c-.4-9.6-3.7-17.4-10.7-23.5c-5.2-6.1-14-9.4-22.7-9.8H96.05c-9.59.4-17.45 3.7-23.58 9.8c-6.14 6.1-9.4 13.9-9.78 23.5v194.4c0 9.2 3.26 17 9.78 23.5s14.38 9.8 23.58 9.8H416.4c9.2 0 17-3.3 23.3-9.8c6.3-6.5 9.7-14.3 10.1-23.5V173.8zm-264.3 42.7c6.3 6.3 9.7 14.1 10.1 23.2V273c-.4 9.2-3.7 16.9-9.8 23.2c-6.2 6.3-14 9.5-23.6 9.5c-9.6 0-17.5-3.2-23.6-9.5c-6.1-6.3-9.4-14-9.8-23.2v-33.3c.4-9.1 3.8-16.9 10.1-23.2c6.3-6.3 13.2-9.6 23.3-10c9.2.4 17 3.7 23.3 10zm191.5 0c6.3 6.3 9.7 14.1 10.1 23.2V273c-.4 9.2-3.7 16.9-9.8 23.2c-6.1 6.3-14 9.5-23.6 9.5c-9.6 0-17.4-3.2-23.6-9.5c-7-6.3-9.4-14-9.7-23.2v-33.3c.3-9.1 3.7-16.9 10-23.2c6.3-6.3 14.1-9.6 23.3-10c9.2.4 17 3.7 23.3 10z"></path>
</svg>`

export const juejinSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="28" viewBox="0 0 36 28" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z" fill="#1E80FF"/>
</svg>`

const sortSep = '_'
const Num = n => parseInt(n, 10)

function getFile(pathname: string) {
	const p = path.resolve(__dirname, '../', pathname)
	if (!fs.existsSync(p)) return []
	const dir = fs
		.readdirSync(p)
		.filter(v => v.endsWith('.md'))
		.sort((a, b) => {
			let n1, n2
			if (a.startsWith('0')) {
				n1 = Num(a.replace('0', '').slice(0, a.indexOf(sortSep)))
			}
			if (b.startsWith('0')) {
				n2 = Num(b.replace('0', '').slice(0, b.indexOf(sortSep)))
			}
			if (a === 'index.md') return 1
			return n1 - n2
		})

	return dir.map(dir => {
		const formatDir = dir.slice(0, dir.lastIndexOf('.'))
		const text = formatDir.slice(formatDir.indexOf(sortSep) + 1)
		return {
			text,
			link: `/${pathname}/${formatDir}`,
		}
	})
}

function getDirectory(directoryPath) {
	const filNames: string[] = []

	const files = fs.readdirSync(path.resolve(__dirname, '../', directoryPath), {
		withFileTypes: true,
	})

	files.forEach(file => {
		if (file.isDirectory()) {
			filNames.push(file.name)
		}
	})

	return filNames
}

export function getSidebar(directoryPath) {
	const sidebar: any[] = []

	const directories = getDirectory(directoryPath)

	directories.forEach(dir => {
		sidebar.push({
			text: dir,
			collapsed: true,
			items: getFile(directoryPath + '/' + dir),
		})
	})

	const files = getFile(directoryPath)
	if (Array.isArray(files) && files.length) {
		sidebar.push(...files)
	}

	return sidebar
}
