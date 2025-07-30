import { useEffect, useState } from "react";

//TWa: import { useAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator, Text, View, Image } from '@aws-amplify/ui-react';

import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

//const client = generateClient<Schema>();


function Start() {

  function gotoLogin() {
    <Authenticator>
        {({ signOut, user }) => (
        <main>
            <h1>Tom says "Hello World". <br></br>My user.name is: {user?.username}</h1>
            <button onClick={signOut}>Sign out</button>
        </main>
    )}
    </Authenticator>
  }

  //const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  //TWa: const { signOut } = useAuthenticator();

  useEffect(() => {

  }, []);

  return (

    <main>
        <h1>Start... h1 label</h1>
        <button onClick={gotoLogin}>Login</button>
    </main>

  );
}

// 

export default Start;
