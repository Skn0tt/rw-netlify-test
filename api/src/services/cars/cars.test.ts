import type { Car } from '@prisma/client'

import { cars, car, createCar, updateCar, deleteCar } from './cars'
import type { StandardScenario } from './cars.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('cars', () => {
  scenario('returns all cars', async (scenario: StandardScenario) => {
    const result = await cars()

    expect(result.length).toEqual(Object.keys(scenario.car).length)
  })

  scenario('returns a single car', async (scenario: StandardScenario) => {
    const result = await car({ id: scenario.car.one.id })

    expect(result).toEqual(scenario.car.one)
  })

  scenario('creates a car', async () => {
    const result = await createCar({
      input: { manufacturer: 'FORD', model: 'String', color: 'RED' },
    })

    expect(result.manufacturer).toEqual('FORD')
    expect(result.model).toEqual('String')
    expect(result.color).toEqual('RED')
  })

  scenario('updates a car', async (scenario: StandardScenario) => {
    const original = (await car({ id: scenario.car.one.id })) as Car
    const result = await updateCar({
      id: original.id,
      input: { manufacturer: 'PORSCHE' },
    })

    expect(result.manufacturer).toEqual('PORSCHE')
  })

  scenario('deletes a car', async (scenario: StandardScenario) => {
    const original = (await deleteCar({ id: scenario.car.one.id })) as Car
    const result = await car({ id: original.id })

    expect(result).toEqual(null)
  })
})
