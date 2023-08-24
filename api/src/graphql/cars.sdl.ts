export const schema = gql`
  type Car {
    id: Int!
    manufacturer: Manufacturer!
    model: String!
    color: Color!
  }

  enum Manufacturer {
    FORD
    TOYOTA
    HONDA
    BMW
    MERCEDES
    SAAB
    PORSCHE
  }

  enum Color {
    RED
    BLUE
    GREEN
    YELLOW
    BLACK
    WHITE
    GREY
  }

  type Query {
    cars: [Car!]! @requireAuth
    car(id: Int!): Car @requireAuth
  }

  input CreateCarInput {
    manufacturer: Manufacturer!
    model: String!
    color: Color!
  }

  input UpdateCarInput {
    manufacturer: Manufacturer
    model: String
    color: Color
  }

  type Mutation {
    createCar(input: CreateCarInput!): Car! @requireAuth
    updateCar(id: Int!, input: UpdateCarInput!): Car! @requireAuth
    deleteCar(id: Int!): Car! @requireAuth
  }
`
