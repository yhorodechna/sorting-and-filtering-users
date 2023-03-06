import React from "react";
import "./Parent.css";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { Main } from "../components/main/Main";
import { Sidebar } from "../components/sidebar/Sidebar";
import { useQuery } from "react-query";
import axios from "axios";
import { IResult } from '../components/exampleSix/common/Interfaces';


export const Parent: React.FC = () => {
  const { data, error, refetch } = useQuery<any, any, IResult>("todos", () =>
    axios
      .get(`https://randomuser.me/api/?results=50&nat=us,dk,fr,gb,ua`)
      .then((data) => data.data)
  );

  // if(data && data.a && data.a.name) {

  // }

  // if(data?.a?.name){

  // }

  return (
    <div className="App">
      <Header title="Sorting And Filtering Users" />
      <Main title="Main" data={data} />
      <Sidebar title="Sidebar" onFilterChange={data => console.log('inside parent', data)} data={data} />
      <Footer title="Footer" />
    </div>
  );
};
