interface ModalInfo {
	key: string
	Component: React.ElementType
	props: unknown
	resolve: (value: string) => void
	reject: (reason?: string) => void
}

type FalgState = [number, React.Dispatch<React.SetStateAction<number>>]

export class ModalController {
	private flagState: FalgState
	private modalInfos: ModalInfo[] = []

	constructor(flagState: FalgState) {
		this.flagState = flagState
	}

	private flush() {
		const [_, setFlag] = this.flagState
		setFlag((prev) => prev + 1)
	}

	get top() {
		return this.modalInfos[this.modalInfos.length - 1]
	}

	private handlePromise(key: string, resolver: (value?: string) => void, value?: string) {
		resolver(value)
		this.modalInfos = this.modalInfos.filter(({ key: _key }) => key !== _key)
		this.flush()
	}

	public clear() {
		while (this.modalInfos.length) {
			this.pop()
		}
		this.flush()
	}

	public pop() {
		this.top.reject(`Close modal : ${this.top.key}`)
		this.modalInfos.pop()
		this.flush()
	}

	async push<C extends React.ElementType>(
		key: string,
		Component: C,
		props: React.ComponentProps<C>,
	) {
		return new Promise((resolve, reject) => {
			this.modalInfos.push({
				key,
				Component,
				props,
				resolve: (value) => this.handlePromise(key, resolve, value),
				reject: (reason) => this.handlePromise(key, reject, reason),
			})
			this.flush()
		})
	}
}
