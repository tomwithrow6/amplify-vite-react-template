import { useEffect, useState } from "react";

import { useAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator, Text, View, Image } from '@aws-amplify/ui-react';

import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./AboutPage";
import StartPage from "./StartPage";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

const client = generateClient<Schema>();

/*
//TWa: THIS IS MY ATTEMPT AT MODIFYING AUTHENTICATION
 const components = {
      Header() {
        return (
          <View padding="var(--amplify-space-large)" textAlign="center">
            <Image
              alt="The Tom and Matt Logo goes here"
              src="/src/assets/react.svg" // Replace with your image path
              width="100px"
              height="100px"
            />
            <Text fontSize="var(--amplify-font-sizes-xl)" fontWeight="bold" marginTop="var(--amplify-space-medium)">
              Welcome to Tom and Matts Thingy
            </Text>
            <Text fontSize="var(--amplify-font-sizes-xl)" fontWeight="bold" marginTop="var(--amplify-space-medium)">
              We connect these people and give them the tools to collaborate. Time, talent, and purpose aligned.
            </Text>
            <Text fontSize="var(--amplify-font-sizes-l)" fontWeight="bold" marginTop="var(--amplify-space-medium)" textAlign={"left"}>
              - Build what matters, together.
            </Text>
            <Text fontSize="var(--amplify-font-sizes-l)" fontWeight="bold" marginTop="var(--amplify-space-medium)" textAlign={"left"}>
              - Where purpose meets action.
            </Text>
            <Text fontSize="var(--amplify-font-sizes-l)" fontWeight="bold" marginTop="var(--amplify-space-medium)" textAlign={"left"}>
              - Helping good ideas find good people.
            </Text>
            <Text fontSize="var(--amplify-font-sizes-x)" fontWeight="bold" marginTop="var(--amplify-space-medium)" textAlign={"left"}>
              - And a whole lot more.
            </Text>
          </View>
        );
      },
      // You can also customize SignIn, SignUp, etc.
    };
*/

function App() {


  /*
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  //TWa: const { signOut } = useAuthenticator();

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }
    
  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }
    */

  return (

    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
    

    /*
    <div>
      <h1>About Page About</h1>
      <h1>More detailed information goes here.</h1> 
      <h1>Company contact info goes here.</h1> 
    </div>
    */

    /* TWa:
    <Authenticator components={components}>
      {({ signOut, user }) => (
        <main>
          <h1>Tom says "Hello World". <br></br>My user.name is: {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
    */

    


    /*  THIS IS ORIGINAL STUFF
    <main>

      <h1>Sign In... h1 label</h1>
      <button onClick={createTodo}>Sign In Button</button>

      <h1>My todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li 
          onClick={() => deleteTodo(todo.id)}
          key={todo.id}>{todo.content}
          </li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
      <button onClick={signOut}>Sign out</button>
    </main>
    */

  );

}


// 

export default App;
