const noop = (...rest) => {
  console.log(rest)
}
export const sumNumber = noop(1, 2)

const x = 1
console.log(x)

export const obj1 = { foo: ['baz', 'bar'] } // 这里期望 ]}
export const obj2 = { foo: { baz: 1, bar: 2 } } // 这里期望 }}
export const arr1 = [['foo'], 'bar']
noop({ name: 'red', age: 20 })

const props = { name: 'red', age: 20 }
const { age = 20 } = props
const { foo = [] } = obj1
const [a1, b1] = arr1

console.log(age, foo, a1, b1)
