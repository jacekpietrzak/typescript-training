/**
 * 13-shorthand-for-initial-props
 * - if we have a big class with many properties it can take a lot of space to declare access modifiers and types. We have shorter way of doing that like below. Typescript will automatically inform about our properties.
 */

class Person12 {
  constructor(protected name: string, public age: number) {}
}
