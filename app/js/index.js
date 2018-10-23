if (module.hot) module.hot.accept()

console.log('[apps/index.js]', 'test')

export default function test() {
    console.log('[apps/index.js]', 'test')
}
