// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Link,
  CodePane,
  Typeface
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'
import { lifecycleEquivalents } from './codeAsString'

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

const Presentation = () => {
  return (
    <Deck
      transition={['zoom', 'slide']}
      transitionDuration={500}
      theme={theme}
    >
      <Slide>
        <Heading fit>React Hooks!</Heading>
        <Text>Why I'll never write a class again</Text>
        <Text style={{fontSize: '.6em'}}>(almost)</Text>
      </Slide>

      {/* What Are Hooks? */}
      <Slide transition={['zoom']} bgColor="primary">
        <Heading size={1} fit textColor="secondary">
          What Are Hooks?
        </Heading>
        <Appear>
          <Text textColor="hsla(200,98%,22%,1)" bold>
            An expressive way to reuse stateful logic between components.
          </Text>
        </Appear>
        <Appear>
          <Text textColor="hsla(200,98%,30%,1)" bold>
            Freedom from writing classes ever again!
            <span style={{fontSize: '.5em'}}>(almost)</span>
          </Text>
        </Appear>
        <Appear>
          <Text textColor="hsla(200,98%,40%,1)" bold>
            Keep related logic in one place - no splitting between lifecycle methods.
          </Text>
        </Appear>
        <Appear>
          <Text textColor="tertiary" bold>
            A way to "hook" into React features in functional components.
          </Text>
        </Appear>
      </Slide>

      {/* Today's Hooks */}
      <Slide transition={['fade']} bgColor="tertiary">
        <Heading size={1} textColor="primary" fit>
          Today's Hooks
        </Heading>
        <Appear>
          <Heading size={3}>useState</Heading>
        </Appear>
        <Appear>
          <Text>Our <span role="img" aria-label="bread">🍞</span> &amp; butter - setting state!</Text>
        </Appear>
        <Appear>
          <Heading size={3}>useCallback</Heading>
        </Appear>
        <Appear>
          <Text>Memoize those <span role="img" aria-label="right arrow">➡️</span> functions</Text>
        </Appear>
        <Appear>
          <Heading size={3}>useEffect</Heading>
        </Appear>
        <Appear>
          <Text>It's like lifecycles but better :)</Text>
        </Appear>
        <Appear>
          <Heading size={3}>useRef</Heading>
        </Appear>
        <Appear>
          <Text>Your mutable BFF <span role="img" aria-label="red sparkly heart">💖</span></Text>
        </Appear>
      </Slide>

      {/* Hooks Rules */}
      <Slide transition={['slide']} bgColor="primary">
        <Heading fit>Hooks Rules</Heading>
        <Appear>
          <Heading style={{marginTop: '1em'}} size={5}>Only Call Hooks at the Top Level.</Heading>
        </Appear>
        <Appear>
          <Text style={{fontSize: '1em'}}>
            Don’t call Hooks inside loops, conditions, or nested functions. This ensures hooks are called in the same order each time a component renders.
          </Text>
        </Appear>
        <Appear>
          <Heading style={{marginTop: '1em'}} size={5}>Only Call Hooks from React Components</Heading>
        </Appear>
        <Appear>
          <Text style={{fontSize: '1em'}}>
            Don’t call Hooks from regular JavaScript functions. Call them from React function components or from other custom hooks.
          </Text>
        </Appear>
      </Slide>

      {/* Silly Quote */}
      <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
        <BlockQuote>
          <Quote>Things are hard until they're not.</Quote>
          <Cite textColor="black">Everyone</Cite>
        </BlockQuote>
      </Slide>

      {/* Time To Joke Around! */}
      <Slide transition={['fade']} bgColor="secondary" textColor="primary">
        <Heading size={2} textColor="primary" fit>Time To Joke Around!</Heading>
        <Text textColor="primary" style={{marginTop: '1em'}}>Let's build something with our new fancy hooks and see how they work in the wild.</Text>
        <Text textColor="primary" style={{marginTop: '1em'}}>
          We'll create an app that loads a nerdy joke via a joke API using fancy hooks.
        </Text>
        <Text textColor="primary" textSize=".6em" style={{marginTop: '1em'}}>(head to VSCode)</Text>
      </Slide>

      {/* useEffect LifeCycle Equivalents */}
      <Slide transition={['zoom']} bgColor="secondary" textColor="primary" align="top">
        <Heading textColor="primary" fit>useEffect LifeCycle Equivalents</Heading>
        <CodePane source={lifecycleEquivalents} lang="js" style={{fontSize: '1em', marginTop: '1em'}}>
          const x = 5
        </CodePane>
      </Slide>

      {/* Full List of Hooks */}
      <Slide transition={['fade']} bgColor="tertiary" textColor="primary">
        <Heading textColor="primary" fit>Full List of Hooks</Heading>

        <div style={{display: 'inline-block'}}>
          <Appear>
            <div>
              <Text textAlign="left" bold>Basic Hooks</Text>
              <List style={{marginLeft: '1em', marginTop: 0}}>
                <ListItem>useState</ListItem>
                <ListItem>useEffect</ListItem>
                <ListItem>useContext</ListItem>
              </List>
            </div>
          </Appear>

          <Appear>
            <div>
              <Text textAlign="left" bold>Additional Hooks</Text>
              <List style={{marginLeft: '1em', marginTop: 0}}>
                <ListItem>useReducer</ListItem>
                <ListItem>useCallback</ListItem>
                <ListItem>useMemo</ListItem>
                <ListItem>useRef</ListItem>
                <ListItem>useImperativeHandle</ListItem>
                <ListItem>useLayoutEffect</ListItem>
                <ListItem>useDebugValue</ListItem>
              </List>
            </div>
          </Appear>
        </div>
      </Slide>

      {/* Helpful Links */}
      <Slide transition={['slide']}>
        <Heading fit>Helpful Links</Heading>

        <Text>Official Docs</Text>
        <Link textColor="tertiary" href="https://reactjs.org/docs/hooks-intro.html">
          https://reactjs.org/docs/hooks-intro.html
        </Link>

        <Text style={{marginTop: '1em'}}>Making Sense of React Hooks</Text>
        <Text style={{fontSize: '.6em'}}>(there's a video!)</Text>
        <Link textColor="tertiary" href="https://dev.to/dan_abramov/making-sense-of-react-hooks-2eib">
          https://dev.to/dan_abramov/making-sense-of-react-hooks-2eib
        </Link>

        <Text style={{marginTop: '1em'}}>useEffect vs useLayoutEffect</Text>
        <Link textColor="tertiary" href="https://kentcdodds.com/blog/useeffect-vs-uselayouteffect">
          https://kentcdodds.com/blog/useeffect-vs-uselayouteffect
        </Link>

        <Typeface googleFont="Great Vibes">
          <Text style={{fontSize: '2em', marginTop: '1em'}}>Fin</Text>
        </Typeface>
      </Slide>
    </Deck>
  )
}


export default Presentation
