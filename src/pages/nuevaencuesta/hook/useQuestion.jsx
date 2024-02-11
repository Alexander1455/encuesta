import { useState } from "react";

const question = {
  text: "",
  options: [],
  status: false,
};

const option = {
  text: "",
};

const useQuestion = () => {
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    if (questions.length === 0) {
      setQuestions([...questions, question]);
      return;
    }

    const lastQuestion = questions[questions.length - 1];
    if (!lastQuestion.text) {
      return;
    }

    if (!lastQuestion.status) {
      return;
    }
    setQuestions([...questions, question]);
  };

  const addOption = (index) => {
    const findQuestion = questions[index];
    // Si el último elemento de la lista de opciones es vacío, no hacemos nada

    // TODO: No lo detecta por que no se hace cambios (aplicar Debounce)
    if (findQuestion.options.length !== 0) {
      const lastOption = findQuestion.options[findQuestion.options.length - 1];
      if (!lastOption.text.trim()) {
        return; // Si el último elemento de la lista de opciones no tiene texto, no hacemos nada
      }
    }

    const newQuestion = {
      ...findQuestion,
      options: [...findQuestion.options, option],
    };
    const newListQuestions = questions.map((question, i) => {
      if (i === index) {
        return newQuestion;
      }
      return question;
    });
    setQuestions(newListQuestions);
  };

  const addValueOption = (index, indexOption, value) => {
    const newQuestions = questions.map((question, i) => {
      if (i === index) {
        const newOptions = question.options.map((option, j) => {
          if (j === indexOption) {
            return { ...option, text: value };
          }
          return option;
        });
        return { ...question, options: newOptions };
      }
      return question;
    });
    setQuestions(newQuestions);
  };

  const saveQuestion = (index) => {
    // no se va a guardar hasta que tengas un titulo o mas de una opción
    const findQuestion = questions[index];
    if (!findQuestion.text) {
      return;
    }
    if (findQuestion.options.length < 2) {
      return;
    }
    const newQuestions = questions.map((question, i) => {
      if (i === index) {
        return { ...question, status: true };
      }
      return question;
    });
    setQuestions(newQuestions);
  };

  const addQuestionTitle = (index, value) => {
    const newQuestions = questions.map((question, i) => {
      if (i === index) {
        return { ...question, text: value };
      }
      return question;
    });
    setQuestions(newQuestions);
  };

  return {
    questions,
    addQuestion,
    addOption,
    addValueOption,
    saveQuestion,
    addQuestionTitle,
  };
};

export default useQuestion;
