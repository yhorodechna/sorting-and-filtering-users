import React from "react";
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

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Parent />

        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
};

export default App;
