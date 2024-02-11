import { IoMdAddCircleOutline } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import useQuestion from "./hook/useQuestion";
import { DebounceInput } from "react-debounce-input";
import { useRef } from "react";

const NuevaEncuesta = () => {
  const {
    addQuestion,
    questions,
    addOption,
    addValueOption,
    saveQuestion,
    addQuestionTitle,
  } = useQuestion();

  const refTitle = useRef();
  const refDescription = useRef();

  const handleAddquestion = () => {
    const encuesta = {
      title: refTitle.current.value,
      description: refDescription.current.value,
      questions,
    };
    console.log(encuesta);
  };

  return (
    <main className="w-full py-6">
      <section className="mx-auto w-11/12 max-w-2xl space-y-3 pb-6">
        {/* Title */}
        <div className="relative">
          <input
            type="text"
            defaultValue="Sin titulo"
            className="text-3xl font-bold w-full"
            ref={refTitle}
          />
          <div className="absolute top-0 right-0">
            <MdModeEditOutline className="" />
          </div>
        </div>

        {/* Description */}
        <div className="">
          <p className="leading-loose">Descripción: </p>
          <textarea
            className="w-full border resize-y text-sm h-24 p-1"
            placeholder="Este formulario tiene como objetivo..."
            ref={refDescription}
          ></textarea>
        </div>

        {questions.map((question, index) => (
          <div className="border rounded p-4 space-y-2" key={index}>
            <DebounceInput
              type="text"
              placeholder="Pregunta..."
              className="w-full p-1 font-semibold border-b"
              disabled={question.status}
              onChange={(e) => addQuestionTitle(index, e.target.value)}
            />
            <p>Opciones: </p>
            {questions.length >= 1 &&
              questions[index].options.length >= 1 &&
              questions[index].options.map((option, i) => (
                <ul className="flex items-center gap-1" key={i}>
                  <li className="w-full">
                    <DebounceInput
                      debounceTimeout={300}
                      onChange={(e) => addValueOption(index, i, e.target.value)}
                      className="w-full border px-1"
                      disabled={question.status}
                    />
                  </li>
                </ul>
              ))}

            {!question.status && (
              <>
                <button
                  className="bg-gray-200 w-full rounded py-1 flex items-center justify-center gap-1"
                  onClick={() => addOption(index)}
                >
                  <IoMdAddCircleOutline className="text-sm" />
                  <p className="text-sm font-semibold">Agregar Opción</p>
                </button>

                <div className="justify-end flex">
                  <button
                    className="rounded text-sm bg-green-500 text-white px-2 py-1 font-bold"
                    onClick={() => saveQuestion(index)}
                  >
                    Agregar
                  </button>
                </div>
              </>
            )}
          </div>
        ))}

        {/* Botón para Agregar Pregunta */}
        <button
          type="button"
          className="border border-gray-200 bg-gray-200 flex justify-center items-center rounded py-3 w-full gap-1"
          onClick={addQuestion}
        >
          <IoMdAddCircleOutline className="text-xl mt-1" />
          <p>Agregar Pregunta</p>
        </button>

        <div>
          <button
            className="bg-green-500 text-white fixed bottom-2 left-4 right-4 py-2 rounded md:left-auto md:right-auto md:w-full md:bottom-auto md:static"
            onClick={handleAddquestion}
          >
            Guardar Encuesta
          </button>
        </div>
      </section>
    </main>
  );
};

export default NuevaEncuesta;
