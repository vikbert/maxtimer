export default ({
  plugins: [preactPreset()],
})

function preactPreset() {
  return [
    {
      future: {
        webpack5: true,
      },
      name: 'preact-preset',
      enforce: 'pre',
      config: () => ({
        esbuild: {
          jsxFactory: 'h',
          jsxFragment: 'Fragment',
          jsxInject: `import { h, Fragment } from 'preact'`,
        },
        resolve: {
          alias: {
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat',
            react: 'preact/compat',
          },
        },
      }),
    }
  ]
}
