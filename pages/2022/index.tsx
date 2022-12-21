import { MDXProvider } from '@mdx-js/react'

const components = {
}

export default function Post(props: any) {
  return (
    <MDXProvider components={components}>
      <article {...props} />
    </MDXProvider>
  )
}