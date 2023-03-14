import React, { useState } from "react";
import "./App.css"
import ListAllStudents from "./pages/list_all_alunos";
import RegisterAlunos from "./pages/register_alunos";
import { DefaultRouter } from "./components/DefaultRouter";
import { RouterApp } from "./routes/AppRoutes";
import UpdateForm from "./pages/update";

export default function App() {
  return (
        <div>
   <RouterApp/>
        </div>
      );
}