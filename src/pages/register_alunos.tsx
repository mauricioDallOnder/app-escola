import { useForm } from "react-hook-form";
import "../styles/update_insert_alunos.css";
import { FormDataAlunos } from "./update";
const API_URL = "https://sheetdb.io/api/v1/kftlrgephlfq4";


export default function RegisterAlunos() {
    const { register, handleSubmit, reset } = useForm<FormDataAlunos>();

    const onSubmit = async (data: FormDataAlunos) => {
        try {
          const response = await fetch(
            `${API_URL}?sheet=pagina1`,
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ data }),
            }
          );
    
          if (response.ok) {
            alert("Dados inseridos com sucesso com sucesso");
            reset();
          } else {
            throw new Error("Erro ao atualizar dados");
          }
        } catch (error) {
          alert(error);
        }
      };

      return(
        <div className="box">
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-field">
          <label className="form-label" htmlFor="id">
            ID
          </label>
          <input
            className="form-input"
            type="number"
            id="id"
            {...register("id")}
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="nome_do_aluno">
            NOME
          </label>
          <input
            className="form-input"
            type="text"
            id="nome_do_aluno"
            {...register("nome_do_aluno")}
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="data_de_nascimento">
            NASCIMENTO
          </label>
          <input
            className="form-input"
            type="text"
            inputMode="numeric"
            placeholder="dd/mm/yyyy"
            id="data_de_nascimento"
            {...register("data_de_nascimento")}
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="certidao_cpf_rg">
            DOCUMENTO
          </label>
          <input
            className="form-input"
            type="text"
            id="certidao_cpf_rg"
            {...register("certidao_cpf_rg")}
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="folha">
            FOLHA
          </label>
          <input
            className="form-input"
            type="text"
            id="folha"
            {...register("folha")}
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="livro">
            LIVRO
          </label>
          <input
            className="form-input"
            type="text"
            id="livro"
            {...register("livro")}
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="mae">
            MÃE
          </label>
          <input
            className="form-input"
            type="text"
            id="mae"
            {...register("mae")}
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="pai">
            PAI
          </label>
          <input
            className="form-input"
            type="text"
            id="pai"
            {...register("pai")}
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="turma_em_2022">
            TURMA
          </label>
          <select
            className="form-input"
            id="turma_em_2022"
            {...register("turma_em_2022")}
          >
            <option value="">Selecione a Turma</option>
            <option value="Educação Infantil-Turma de 4 anos">
              Educação Infantil-Turma de 4 anos
            </option>
            <option value="Educação Infantil-Turma de 5 anos">
              Educação Infantil-Turma de 5 anos
            </option>
            <option value="1º ANO A">1º ANO A</option>
            <option value="2º ANO A">2º ANO A</option>
            <option value="3º ANO A">3º ANO A</option>
            <option value="3º ANO B">3º ANO B</option>
            <option value="4º ANO A">4º ANO A</option>
            <option value="5º ANO A">5º ANO A</option>
            <option value="5º ANO B">5º ANO B</option>
            <option value="6º ANO A">6º ANO A</option>
            <option value="6º ANO B">6º ANO B</option>
            <option value="7º ANO A">7º ANO A</option>
            <option value="7º ANO B">7º ANO B</option>
            <option value="8º ANO A">8º ANO A</option>
            <option value="8º ANO B">8º ANO B</option>
            <option value="9º ANO A">9º ANO A</option>
            <option value="9º ANO B">9º ANO B</option>
          </select>
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="ano_fundamental">
            ANO DO ENSINO FUNDAMENTAL
          </label>
          <select
            id="ano_fundamental"
            className="form-input"
            {...register("ano_fundamental")}
          >
            <option value="">Selecione o Ano do Ensino Fundamental</option>
            <option value="Educação Infantil-Turma de 4 anos">
              Educação Infantil-Turma de 4 anos
            </option>
            <option value="Educação Infantil-Turma de 5 anos">
              Educação Infantil-Turma de 5 anos
            </option>
            <option value="1° ano do ensino fundamental">
              1° ano do ensino fundamental
            </option>
            <option value="2° ano do ensino fundamental">
              2° ano do ensino fundamental
            </option>
            <option value="3° ano do ensino fundamental">
              3° ano do ensino fundamental
            </option>
            <option value="4° ano do ensino fundamental">
              4° ano do ensino fundamental
            </option>
            <option value="5° ano do ensino fundamental">
              5° ano do ensino fundamental
            </option>
            <option value="6° ano do ensino fundamental">
              6° ano do ensino fundamental
            </option>
            <option value="7° ano do ensino fundamental">
              7° ano do ensino fundamental
            </option>
            <option value="8° ano do ensino fundamental">
              8° ano do ensino fundamental
            </option>
            <option value="9° ano do ensino fundamental">
              9° ano do ensino fundamental
            </option>
          </select>
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="turno">
            TURNO
          </label>
          <input
            className="form-input"
            type="text"
            id="turno"
            {...register("turno")}
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="movimentacao">
            MOVIMENTAÇÃO
          </label>
          <input
            className="form-input"
            type="text"
            id="movimentacao"
            {...register("movimentacao")}
          />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="data_movimento">
            DATA DA MOVIMENTAÇÃO
          </label>
          <input
            className="form-input"
            type="text"
            inputMode="numeric"
            placeholder="dd/mm/yyyy"
            id="data_movimento"
            {...register("data_movimento")}
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="naturalidade">
            Naturalidade
          </label>
          <input
            className="form-input"
            type="text"
            id="naturalidade"
            {...register("naturalidade")}
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="Raça">
            Raça
          </label>
          <input
            className="form-input"
            type="text"
            id="Raça"
            {...register("Raça")}
          />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="observações">
            OBSERVAÇÕES
          </label>
          <textarea
            className="form-input"
            id="observações"
            {...register("observações")}
          />
        </div>
        <button className="form-submit" type="submit">
          Cadastrar alunos
        </button>
      </form>
    </div>
      )
    
}