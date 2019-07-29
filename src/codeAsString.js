export const lifecycleEquivalents =  `// componentDidMount
useEffect(() => {
  console.log('componentDidMount')
}, [])

// componentDidUpdate
const isUpdate = useRef(false)
useEffect(() => {
  if (isUpdate.current) {
    console.log('componentDidUpdate')
  } else {
    isUpdate.current = true
  }
})

// componentWillUnmount
useEffect(() => {
  return () => console.log('componentWillUnmount')
})
`
