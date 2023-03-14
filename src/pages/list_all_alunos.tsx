import "../styles/list_all_alunos.css";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import { FormDataAlunos } from "./update";
const obj = [
  {
    "470": "",
    id: "205125036801",
    nome_do_aluno: "ÁGATA DE LIMA",
    data_de_nascimento: "14/05/2012",
    certidao_cpf_rg: "711.456.192-07",
    folha: "-",
    livro: "-",
    mae: "Dauglis Yusbely Gonzalez Ravelis",
    pai: "Pai Desconhecido(30)",
    turma_em_2022: "5º ANO A",
    ano_fundamental: "5° ano do ensino fundamental",
    turno: "tarde",
    movimentacao: "",
    data_movimento: "",
    naturalidade: "venezuela",
    Raça: "NÃO DECLARADA",
    observações: "",
    "": 0,
  },
  {
    "470": "",
    id: "144861765969",
    nome_do_aluno: "Adryeny Sena Macedo",
    data_de_nascimento: "18/11/2011",
    certidao_cpf_rg: "7133754155",
    folha: "-",
    livro: "-",
    mae: "Nitiele Aires Sena Da Rosa",
    pai: "Jovane Dos Santos Macedo",
    turma_em_2022: "6º ANO B",
    ano_fundamental: "6° ano do ensino fundamental",
    turno: "manhã",
    movimentacao: "",
    data_movimento: "",
    naturalidade: "São Borja",
    Raça: "",
    observações: "",
    "": 0,
  },
];
export default function ListAllStudents() {
  //https://sheetdb.io/api/v1/mora2kv8f7v4x?sheet=pagina1

  const [data, setData] = useState<FormDataAlunos[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 15;

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

useEffect(() => {
  async function fetchData() {
    const response = await fetch('https://sheetdb.io/api/v1/mora2kv8f7v4x?sheet=pagina1');
    const data = await response.json();
    setData(data);
  }
  fetchData();
}, []);
  const filtrados = data.filter((item) => {
    const searchTermNormalized = searchTerm
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const itemNormalized = {
      nome_do_aluno: item.nome_do_aluno
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""),
      data_de_nascimento: item.data_de_nascimento
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""),
      mae: item.mae.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
      pai: item.pai.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
      turma_em_2022: item.turma_em_2022
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""),
      movimentacao: item.movimentacao
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""),
      data_movimento: item.data_movimento
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""),
    };
    return (
      itemNormalized.nome_do_aluno
        .toLowerCase()
        .includes(searchTermNormalized.toLowerCase()) ||
      itemNormalized.data_de_nascimento
        .toLowerCase()
        .includes(searchTermNormalized.toLowerCase()) ||
      itemNormalized.mae
        .toLowerCase()
        .includes(searchTermNormalized.toLowerCase()) ||
      itemNormalized.pai
        .toLowerCase()
        .includes(searchTermNormalized.toLowerCase()) ||
      itemNormalized.turma_em_2022
        .toLowerCase()
        .includes(searchTermNormalized.toLowerCase()) ||
      itemNormalized.movimentacao
        .toLowerCase()
        .includes(searchTermNormalized.toLowerCase()) ||
      itemNormalized.data_movimento
        .toLowerCase()
        .includes(searchTermNormalized.toLowerCase())
    );
  });

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filtrados.slice(startIndex, endIndex);

  return (
    
          <div className="table100">
            <div className="search-wrapper">
              <input
                type="text"
                className="search-input"
                placeholder="pesquisar..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <div className="search-icon-wrapper">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="search-icon"
                  size="lg"
                  style={{ color: "black" }}
                />
              </div>
            </div>
            <table>
              <thead>
                <tr className="table100-head">
                 
                  <th className="column1">ID</th>
                  <th className="column2">Nome</th>
                  <th className="column3">Nascimento</th>
                  <th className="column4">1ºFiliação</th>
                  <th className="column5">2ºFiliação</th>
                  <th className="column6">Turma</th>
                
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => {
                  
                  return (
                    <tr key={index}>
                      
                      <td className="column1">{item.id}</td>
                      <td className="column2">{item.nome_do_aluno}</td>
                      <td className="column3">{item.data_de_nascimento}</td>
                      <td className="column4">{item.mae}</td>
                      <td className="column5">{item.pai}</td>
                      <td className="column6">{item.turma_em_2022}</td>
                      
                    </tr>
                  );
                })}
              </tbody>
            </table>
           <div className="react-pagination">
            <ReactPaginate
              pageCount={Math.ceil(filtrados.length / itemsPerPage)}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
            </div>
          </div>
      
  );
}
