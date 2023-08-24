import type { Prisma, Car } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CarCreateArgs>({
  car: {
    one: { data: { manufacturer: 'FORD', model: 'String', color: 'RED' } },
    two: { data: { manufacturer: 'FORD', model: 'String', color: 'RED' } },
  },
})

export type StandardScenario = ScenarioData<Car, 'car'>
