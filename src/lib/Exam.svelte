<script lang="ts">
  import { onMount } from "svelte";
  import Counter from "./Counter.svelte";

  type Answer = {
    i: number;
    value: string;
  };

  type Choice = {
    i: number;
    value: string;
    chosen: boolean;
  };

  type Question = {
    questionId: number;
    type: "MCQ";
    isCorrect: boolean;
    question: string;
    answer: Answer;
    choices: Choice[];
  };

  type WrittenQuestion = {
    questionId: number;
    type: "written";
    question: string;
    answered: string;
  };

  type Exam = {
    id: number;
    name: string;
    startTime: string;
    endTime: string;
    mcqResult: number;
    writtenResult: number;
    questions: Question[];
    writtenQuestions: WrittenQuestion[];
  };

  var localExam: string = localStorage.getItem("exam");
  if (!localExam) {
    const starterExam: Exam = {
      id: 0,
      name: "",
      startTime: "",
      endTime: "",
      mcqResult: 0,
      writtenResult: 0,
      questions: [
        {
          questionId: 1,
          type: "MCQ",
          isCorrect: false,
          question: "Where does the Dursley family live?",
          answer: { i: 4, value: "Number Four, Privet Drive" },
          choices: [
            { i: 1, value: "Number Sixteen, Privet Drive", chosen: false },
            { i: 2, value: "Number Six, Diagon Alley", chosen: false },
            { i: 3, value: "17 North Street", chosen: false },
            { i: 4, value: "Number Four, Privet Drive", chosen: false },
          ],
        },
        {
          questionId: 2,
          type: "MCQ",
          isCorrect: false,
          question:
            "What type of animal does Professor McGonagall transform into?",
          answer: { i: 2, value: "Cat" },
          choices: [
            { i: 1, value: "Toad", chosen: false },
            { i: 2, value: "Cat", chosen: false },
            { i: 3, value: "Owl", chosen: false },
            { i: 4, value: "Dog", chosen: false },
          ],
        },
        {
          questionId: 3,
          type: "MCQ",
          isCorrect: false,
          question: "How do the members of the wizard community s  their mail?",
          answer: { i: 2, value: "Owl" },
          choices: [
            { i: 1, value: "By Train", chosen: false },
            { i: 2, value: "By Owl", chosen: false },
            { i: 3, value: "By Magic", chosen: false },
            { i: 4, value: "By Plane", chosen: false },
          ],
        },
        {
          questionId: 4,
          type: "MCQ",
          isCorrect: false,
          question: "What does Hagrid bring Harry when he first meets him?",
          answer: { i: 1, value: "A Broomstick" },
          choices: [
            { i: 1, value: "A Broomstick", chosen: false },
            { i: 2, value: "An Owl", chosen: false },
            { i: 3, value: "A Flying Motorcycle", chosen: false },
            { i: 4, value: "A Birthday Cake", chosen: false },
          ],
        },
        {
          questionId: 5,
          type: "MCQ",
          isCorrect: false,
          question:
            "How did the Dursleys explain the death of Harry's parents to him?",
          answer: {
            i: 1,
            value: "They Said That His Parents Died In A Car Crash.",
          },
          choices: [
            {
              i: 1,
              value: "They Said That His Parents Died In A Car Crash.",
              chosen: false,
            },
            {
              i: 2,
              value: "They Said That His Parents Died On An Airplane Crash.",
              chosen: false,
            },
            {
              i: 3,
              value:
                "They Said That His Parents Died In A Battle With Lord Voldemort.",
              chosen: false,
            },
            {
              i: 4,
              value: "They Said That His Parents Died In A Wizarding Duel.",
              chosen: false,
            },
          ],
        },
        {
          questionId: 6,
          type: "MCQ",
          isCorrect: false,
          question: "Where does the Dursley family live?",
          answer: { i: 4, value: "Number Four, Privet Drive" },
          choices: [
            { i: 1, value: "Number Sixteen, Privet Drive", chosen: false },
            { i: 2, value: "Number Six, Diagon Alley", chosen: false },
            { i: 3, value: "17 North Street", chosen: false },
            { i: 4, value: "Number Four, Privet Drive", chosen: false },
          ],
        },
        {
          questionId: 7,
          type: "MCQ",
          isCorrect: false,
          question: "Where does the Dursley family live?",
          answer: { i: 4, value: "Number Four, Privet Drive" },
          choices: [
            { i: 1, value: "Number Sixteen, Privet Drive", chosen: false },
            { i: 2, value: "Number Six, Diagon Alley", chosen: false },
            { i: 3, value: "17 North Street", chosen: false },
            { i: 4, value: "Number Four, Privet Drive", chosen: false },
          ],
        },
        {
          questionId: 8,
          type: "MCQ",
          isCorrect: false,
          question: "Where does the Dursley family live?",
          answer: { i: 4, value: "Number Four, Privet Drive" },
          choices: [
            { i: 1, value: "Number Sixteen, Privet Drive", chosen: false },
            { i: 2, value: "Number Six, Diagon Alley", chosen: false },
            { i: 3, value: "17 North Street", chosen: false },
            { i: 4, value: "Number Four, Privet Drive", chosen: false },
          ],
        },
        {
          questionId: 9,
          type: "MCQ",
          isCorrect: false,
          question: "Where does the Dursley family live?",
          answer: { i: 4, value: "Number Four, Privet Drive" },
          choices: [
            { i: 1, value: "Number Sixteen, Privet Drive", chosen: false },
            { i: 2, value: "Number Six, Diagon Alley", chosen: false },
            { i: 3, value: "17 North Street", chosen: false },
            { i: 4, value: "Number Four, Privet Drive", chosen: false },
          ],
        },
        {
          questionId: 10,
          type: "MCQ",
          isCorrect: false,
          question: "Where does the Dursley family live?",
          answer: { i: 4, value: "Number Four, Privet Drive" },
          choices: [
            { i: 1, value: "Number Sixteen, Privet Drive", chosen: false },
            { i: 2, value: "Number Six, Diagon Alley", chosen: false },
            { i: 3, value: "17 North Street", chosen: false },
            { i: 4, value: "Number Four, Privet Drive", chosen: false },
          ],
        },
        {
          questionId: 11,
          type: "MCQ",
          isCorrect: false,
          question: "Where does the Dursley family live?",
          answer: { i: 4, value: "Number Four, Privet Drive" },
          choices: [
            { i: 1, value: "Number Sixteen, Privet Drive", chosen: false },
            { i: 2, value: "Number Six, Diagon Alley", chosen: false },
            { i: 3, value: "17 North Street", chosen: false },
            { i: 4, value: "Number Four, Privet Drive", chosen: false },
          ],
        },
        {
          questionId: 12,
          type: "MCQ",
          isCorrect: false,
          question: "Where does the Dursley family live?",
          answer: { i: 4, value: "Number Four, Privet Drive" },
          choices: [
            { i: 1, value: "Number Sixteen, Privet Drive", chosen: false },
            { i: 2, value: "Number Six, Diagon Alley", chosen: false },
            { i: 3, value: "17 North Street", chosen: false },
            { i: 4, value: "Number Four, Privet Drive", chosen: false },
          ],
        },
      ],
      writtenQuestions: [
        {
          questionId: 10,
          type: "written",
          answered: "",
          question:
            "Out of the Three Main Characters: Harry, Hermione and Ron, which is you favourite? why?",
        },
        {
          questionId: 20,
          type: "written",
          answered: "",
          question: "Who are you?",
        },
      ],
    };
    localStorage.setItem("exam", JSON.stringify(starterExam));
    localExam = JSON.stringify(starterExam);
  }

  var examEndedLocal: string = localStorage.getItem("examEnded");
  if (!examEndedLocal) {
    examEndedLocal = "false";
    localStorage.setItem("examEnded", examEndedLocal);
  }
  let examEnded = examEndedLocal === "false" ? false : true;

  const exam: Exam = JSON.parse(localExam);

  const questions: Question[] = exam.questions;
  const writtenQuestions: WrittenQuestion[] = exam.writtenQuestions;

  const save = (): void => {
    localStorage.setItem("exam", JSON.stringify(exam));
  };

  const trim_save = (questionId: number) => {
    CountWords(questionId);
    writtenQuestions.forEach((question) => {
      question.answered = question.answered.trim();
    });
    save();
  };

  onMount(() => {
    type ChoiceListItem = { qId: number; cIdx: number };
    let choiceList: ChoiceListItem[] = questions.map((q) => {
      let item: ChoiceListItem = { qId: 0, cIdx: 0 };
      if (q.choices.find((c) => c.chosen)) {
        item.qId = q.questionId;
        item.cIdx = q.choices.find((c) => c.chosen).i;
      }
      return item;
    });
    choiceList.forEach((c) => {
      if (!(c.cIdx == 0 && c.qId == 0)) {
        let ele = document.getElementById(`choice-${c.qId}-${c.cIdx}`);
        ele.classList.remove("bg-slate-800");
        ele.classList.add("bg-cyan-700");
      }
    });

    writtenQuestions.map((wq) => {
      CountWords(wq.questionId / 2 + 1);
    });
  });

  function ChangeChoicebg(questionId: number, answer: number) {
    let choices = document.getElementsByName(`choice-${questionId}`);
    if (!choices.length) return;
    choices.forEach((c) => {
      if (c.id == `choice-${questionId}-${answer}`) {
        c.classList.remove("bg-slate-800");
        c.classList.add("bg-cyan-700");
      } else {
        c.classList.remove("bg-cyan-700");
        c.classList.add("bg-slate-800");
      }
    });
  }

  const ChangeAnswerMCQ = (questionId: number, answer: number): void => {
    ChangeChoicebg(questionId, answer);
    var question: Question = questions.find((x) => x.questionId == questionId);
    var choices: Choice[] = question.choices;

    choices.forEach((choice) => {
      if (choice.i == answer) {
        choice.chosen = true;
      } else {
        choice.chosen = false;
      }
    });

    if (question.answer.i == answer) {
      question.isCorrect = true;
    } else {
      question.isCorrect = false;
    }

    save();
  };

  let signedIn = !exam.name ? false : true;
  let userName = "";
  let helpMes = "";
  function SignIn() {
    if (!userName) {
      helpMes = "enter your full name!";
      return;
    }
    exam.name = userName;
    exam.startTime = new Date().toLocaleString();
    save();
    signedIn = !signedIn;
  }

  let examNotDoneMss = "Solve all questions before ending exam";
  let examNotDone = false;
  function CheckExamDone(): Boolean {
    let done = true;

    questions.map((q) => {
      let chosen = q.choices.find((c) => c.chosen);
      if (chosen === undefined) {
        done = false;
        return;
      }
    });

    if (!done) {
      examNotDoneMss = "Solve all MCQ questions before ending the exam!";
      examNotDone = true;
      return false;
    }

    writtenQuestions.map((wq) => {
      let count = CountWords(wq.questionId / 2 + 1);
      if (count < 70) {
        done = false;
        return;
      }
    });

    if (!done) {
      examNotDoneMss = "Solve all Writing questions before ending the exam!";
      examNotDone = true;
      return false;
    }

    return true;
  }

  function EndExam() {
    if (!CheckExamDone()) return;
    exam.endTime = new Date().toLocaleString();
    save();
    SaveResult();
    localStorage.setItem("examEnded", "true");
    examEnded = !examEnded;
    signedIn = !signedIn;
  }

  async function SaveResult() {
    const rawResponse = await fetch(
      "https://c2a9-41-36-40-96.ngrok-free.app/submit",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(exam),
      }
    );
    const content = await rawResponse.json();
  }

  function CountWords(questionId: number): number {
    console.log(questionId);

    let ele = document.getElementById(
      `textarea-${questionId}`
    ) as HTMLTextAreaElement | null;
    let textEle = document.getElementById(`wordCount-${questionId}`);
    let warningEle = document.getElementById(`warning-${questionId}`);

    let res = [];
    let str = ele.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");

    str.map((s) => {
      let trimStr = s.trim();
      if (trimStr.length > 0) {
        res.push(trimStr);
      }
    });
    textEle.innerText = res.length.toString();

    if (res.length < 70) {
      warningEle.classList.remove("hidden");
      ele.classList.add("border-4");
      ele.classList.add("border-red-500");
    } else {
      warningEle.classList.add("hidden");
      ele.classList.remove("border-4");
      ele.classList.remove("border-red-500");
    }

    return res.length;
  }
</script>

{#if !signedIn && !examEnded}
  <div class="flex justify-center items-center h-screen">
    <div class="flex flex-col p-10 gap-2 mb-48 rounded bg-slate-900 shadow-lg">
      <label for="signUp" class="text-gray-100 self-center"
        >What is your name?</label
      >
      <input
        bind:value={userName}
        placeholder={helpMes}
        id="signUp"
        type="text"
        class="text-gray-200 border-slate-500 border-2 rounded bg-slate-800 p-1"
      />
      <button
        on:click={SignIn}
        class="border rounded bg-slate-900 text-gray-400 mt-3 p-1"
        >Start Exam</button
      >
    </div>
  </div>
{/if}

{#if signedIn && !examEnded}
  <div class="flex justify-center">
    <span class="text-gray-600">(Choose the correct answer)</span>
  </div>
  <div class="">
    {#each questions as question, i}
      {#if i % 5 == 0 && i != 0}
        <div class="mt-3 flex">
          <span class="text-gray-500 font-bold">w.</span>
          <div class="flex flex-col">
            <span
              class="text-gray-100 font-semibold ml-1 whitespace-pre-wrap break-normal"
            >
              {writtenQuestions[(question.questionId - 1) / 5 - 1]
                .question}</span
            >
            <span
              id="warning-{question.questionId}"
              class="text-red-500 opacity-80 hidden"
              >(write at least 70 words)</span
            >
            <span class="text-gray-500"
              >(<span id="wordCount-{question.questionId}">0</span> / 70 words)</span
            >
          </div>
        </div>
        <div class="mt-4 mx-4 flex h-[35vh]">
          <textarea
            id="textarea-{question.questionId}"
            class="bg-slate-800 p-2 w-full rounded text-gray-300 border-4 border-red-500"
            bind:value={writtenQuestions[(question.questionId - 1) / 5 - 1]
              .answered}
            on:input={() => trim_save(question.questionId)}
            placeholder="type your answer here..."
          />
        </div>

        <hr
          class="w-80 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-600"
        />
      {/if}
      <div class="mt-3 flex">
        <span class="text-gray-500">{question.questionId}.</span>
        <span class="text-gray-100 font-semibold ml-1">
          {question.question}</span
        >
        <br />
      </div>

      {#each question.choices as choice, x}
        <div class="mt-4 mx-4">
          <input
            class="p-2 w-full rounded text-gray-100 text-left bg-slate-800 whitespace-pre-wrap"
            type="button"
            id="choice-{question.questionId}-{choice.i}"
            name="choice-{question.questionId}"
            value={choice.value}
            on:click={() => ChangeAnswerMCQ(question.questionId, choice.i)}
          />
          <br />
        </div>
      {/each}
      <hr
        class="w-80 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-600"
      />
    {/each}
  </div>

  <div class="flex flex-col justify-center items-center">
    <span class="text-red-600 opacity-60 {examNotDone ? '' : 'hidden'}"
      >{examNotDoneMss}</span
    >
    <button
      on:click={EndExam}
      class="rounded shadow-sm bg-red-700 text-gray-400 mt-3 px-3 text-lg"
      >End Exam</button
    >
  </div>
{/if}

{#if examEnded}
  <div class="flex justify-center items-center h-screen">
    <h1 class="text-blue-100 mb-72">Thank you for taking the exam!</h1>
  </div>
{/if}
