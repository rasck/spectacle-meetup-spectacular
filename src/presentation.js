// Import React
import React from "react";

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
  Notes,
  Image,
  Layout,
  Fill,
  Fit,
  Link,
  ComponentPlayground,
  CodePane,
  Magic,
  Table,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableRow,
  TableItem,
  Appear
} from "spectacle";

import Interactive from "./assets/interactive";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

// Following line make us able to build
// Danger is that if create-react-app no longer uses webpack
// raw-loader will no longer work.

/* eslint import/no-webpack-loader-syntax: off */

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE",
    senary: "#ff4081"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide", "fade"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            spectacle
          </Heading>
          <Text>
            Made by <Image src="/images/formidable-logo.svg" />
          </Text>
          <Notes>
            <ol>
              <li>Present yourself</li>
              <li>The company you work for?</li>
              <li>Explain briefly the agenda of this presenation</li>
              <li>How long time you intend to use</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="senary">
            Create presenations using
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="senary">
            React & JSX
          </Heading>
          <Text textColor="primary">Features:</Text>
          <Layout>
            <Fill>
              <Appear>
                <List>
                  <ListItem textColor="quartenary">Flexible Layouts</ListItem>
                  <ListItem textColor="quartenary">Presenter Mode</ListItem>
                  <ListItem textColor="quartenary">Host Slides</ListItem>
                  <ListItem textColor="quartenary">Transitions</ListItem>
                  <ListItem textColor="quartenary">Progress Bars</ListItem>
                </List>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <List>
                  <ListItem textColor="quartenary">Live Code</ListItem>
                  <ListItem textColor="quartenary">Formatted Code</ListItem>
                  <ListItem textColor="quartenary">PDF Export</ListItem>
                  <ListItem textColor="quartenary">Extendable</ListItem>
                  <ListItem textColor="quartenary">Themes</ListItem>
                </List>
              </Appear>
            </Fill>
          </Layout>
          <Notes>
            <h4>Introduce the concept behind the technology</h4>
            <ol>
              <li>Why is the concept relevant?</li>
              <li>What is the purpose?</li>
              <li>What is the problem / pain it aims to solve?</li>
            </ol>
            <p>
              - If you know react, its a nice way to create interactive slides
            </p>
          </Notes>
        </Slide>
        <Slide
          transition={["slide"]}
          bgColor="secondary"
          align="flex-start center"
        >
          <Link href="https://medium.com/formidable-blog/first-impressions-with-the-web-s-latest-presentation-tool-spectacle-7fab1f057051">
            <BlockQuote>
              <Quote textSize="50" textColor="primary">
                Spectacle, if you haven’t seen it, is another in a long line of
                HTML presentation tools, but this one has rocketed into
                popularity
              </Quote>
              <Cite textColor="primary">Erik Bear</Cite>
            </BlockQuote>
          </Link>
          <Notes>
            <h4>Explain how the technology/concept differ</h4>
            <ol>
              <li>Give a short intro to related technologies/concepts</li>
              <li>What makes the technology/concept in question special?</li>
            </ol>
            <p>
              There are other html presentation tools out there but they are
              either more complex or not react ;)
            </p>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={5} caps lineHeight={1} textColor="primary">
            Demo
          </Heading>
          <ComponentPlayground
            theme="dark"
            code={require("!raw-loader!./assets/code-examples/react.example")}
          />
          <Notes>
            <h4>Live code editing!</h4>
            <p>
              Good for presentation of simple code concepts. There is a render
              function that is specific to hook up the ComponentPlayground.
              Other than that is pure react
            </p>
            <p>
              It can be a hassle to get ComponentPlayground working, specially
              if you need other languages. See the troubleshoot slides.
            </p>
          </Notes>
        </Slide>
        <Magic transition={["zoom"]}>
          <Slide bgColor="secondary" textColor="primary">
            <Heading size={5} textColor="primary" caps>
              Demo
            </Heading>
            <CodePane
              lang="jsx"
              source={require("!raw-loader!./assets/code-examples/react.1.example")}
            />
            <Notes>
              <h4>Higlighted code!</h4>
              <p>
                In powerpoint I have trouble showing code examples with good
                highlighting.
              </p>
              <p>
                Sometimes i have got it to work by VS plugins and custom paste
                functions. But here it just uses prism under the hood!
              </p>
            </Notes>
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <Heading size={5} textColor="primary" caps>
              Demo
            </Heading>
            <CodePane
              lang="jsx"
              source={require("!raw-loader!./assets/code-examples/react.2.example")}
            />
          </Slide>
        </Magic>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Extendable & Interactive
          </Heading>
          <Interactive />
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Where to learn more?
          </Heading>
          <Layout>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem />
                  <TableHeaderItem />
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableItem>
                    <Link href="https://github.com/FormidableLabs/spectacle">
                      <Text textColor="senary">Spectacle</Text>
                    </Link>
                  </TableItem>
                  <TableItem textColor="quartenary">
                    Their Github repo
                  </TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>
                    <Link href="http://stack.formidable.com/spectacle/">
                      <Text textColor="senary">Presentation</Text>
                    </Link>
                  </TableItem>
                  <TableItem textColor="quartenary">
                    Demo by spectacle
                  </TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>
                    <Link href="https://github.com/impress/impress.js">
                      <Text textColor="senary">Impress.js</Text>
                    </Link>
                  </TableItem>
                  <TableItem textColor="quartenary">
                    An altnerative to Spectacle
                  </TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>
                    <Link href="https://github.com/hakimel/reveal.js">
                      <Text textColor="senary">Reveal.js</Text>
                    </Link>
                  </TableItem>
                  <TableItem textColor="quartenary">
                    An altnerative to Spectacle
                  </TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Questions?
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="quartenary">
            Troubleshooting
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            - ComponentPlayground
          </Heading>
          <Text>How to get it to work with other languages</Text>
          <List ordered>
            <ListItem textColor="tertiary" textSize={30}>
              Get the prism css & js files for the languages you want
            </ListItem>
            <ListItem textColor="tertiary" textSize={30}>
              Reference the prism css file in the index.html file (in the public
              folder)
            </ListItem>
            <ListItem textColor="tertiary" textSize={30}>
              I had to go to the node_modules folder find prismjs -> components
              -> prism-core.js & prism-core.min.js and replace them with the
              downloaded prism.js javascript file
            </ListItem>
            <ListItem textColor="tertiary" textSize={30}>
              To make raw-loader work I installed it locally using "npm -i
              --save-dev raw-loader"
            </ListItem>
            <ListItem textColor="tertiary" textSize={30}>
              add '// eslint import/no-webpack-loader-syntax: off' somewhere in
              your presentation file
            </ListItem>
          </List>
          <Notes>
            <ol>
              <li>Troubleshooting</li>
              <li>Tips & Tricks you didn't had time for</li>
              <li>More examples</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="quartenary">
            Troubleshooting
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            - Insert a Logo
          </Heading>
          <Text>
            Best way I have found is to insert it in the index.html file (in the
            public folder)
          </Text>
          <CodePane
            lang="html"
            source={`
           <footer>
           <img class="logo" src="/images/ucn-logo.png" alt="logo" />
          </footer>`}
          />
          <Text>... with the css</Text>
          <CodePane
            lang="css"
            source={`
            .logo {
              position: fixed;
              bottom: 0;
              left: 0;
            }`}
          />
          <Notes>
            <ol>
              <li>Troubleshooting</li>
              <li>Tips & Tricks you didn't had time for</li>
              <li>More examples</li>
            </ol>
          </Notes>
        </Slide>
      </Deck>
    );
  }
}
