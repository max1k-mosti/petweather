import { IPosition } from '@/types/position.types'

import { IpClient } from '@/api/apiclient'

class PositionService {
	private BASE_URL = '/json'

	async getPositionByIP() {
		const response = IpClient.get<IPosition>(this.BASE_URL)
		return response
	}
}

export const positionService = new PositionService()
