import React, { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Sidebar } from "./components/sidebar/Sidebar";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import axios from "axios";
import { ReactQueryDevtools } from "react-query/devtools";
import { Parent } from "./containers/Parent";
import { Color } from "./components/exampleOne/ExampleOne";
import { ColorSquare } from "./components/exampleTwo/ExampleTwo";
import { ToDoList } from "./components/exampleThree/ExampleThree";
import { Calculator } from "./components/exampleFour/ExampleFour";
import { Dialog } from "./components/exampleFive/ExampleFive";

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [color, setColor] = useState('red');
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(localStorage.getItem("key") ? JSON.parse(localStorage.getItem("key") || '') : [])
  }, [])

  const handleDataChange = (value: string[]) => {
    localStorage.setItem("key", JSON.stringify(value));
  }

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        {/* <Parent /> */}
        {/* <Color /> */}
        <br />
        {/* <h1 style={{ color }}>Hello!</h1> */}
        {/* <ColorSquare color='red' onColorChange={setColor} /> */}
        <br />
        {/* <ToDoList data={data} onDataChange={handleDataChange} /> */}
        {/* <ReactQueryDevtools /> */}
        {/* < Calculator /> */}
        <Dialog />
      </QueryClientProvider>
    </div>
  );
};

export default App;

