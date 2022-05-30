export const sleep = (t) =>
  new Promise((resolve) => {
    setTimeout(resolve, t, 'done')
  })

export const config = {
  env: 'dev',
}
