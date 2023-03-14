import { Route, Routes } from "react-router-dom"
import { DefaultRouter } from "../components/DefaultRouter"
import RegisterAlunos from "../pages/register_alunos"
import ListAllStudents from "../pages/list_all_alunos"
import Update from "../pages/update"
import { HomePage } from "../pages/homepage"

export const RouterApp =()=>{
  return(
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/" element={<DefaultRouter/>}>
        <Route path="/UpdateAlunos" element={<Update/>}></Route>
        <Route path="/RegisterAlunos" element={<RegisterAlunos/>}></Route>
        <Route path="/ListAllStudents" element={<ListAllStudents/>}></Route>
      </Route>
    </Routes>
  )
}
