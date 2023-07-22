<script lang="ts">
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
          question:
            "How do the members of the wizard community send their mail?",
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

  const exam: Exam = JSON.parse(localExam);

  const questions: Question[] = exam.questions;
  const writtenQuestions: WrittenQuestion[] = exam.writtenQuestions;

  const save = (): void => {
    localStorage.setItem("exam", JSON.stringify(exam));
  };

  const trim_save = (): void => {
    writtenQuestions.forEach((question) => {
      question.answered = question.answered.trim();
    });
    save();
  };

  const ChangeAnswerMCQ = (questionId: number, answer: number): void => {
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

  let signedIn = false;
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

  let examEnded = false;
  function EndExam() {
    exam.endTime = new Date().toLocaleString();
    save();
    SaveResult();
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
</script>

{#if !signedIn && !examEnded}
  <div class="flex flex-col max-w-min gap-2">
    <label for="signUp" class="text-gray-100">What is your name?</label>
    <input
      bind:value={userName}
      placeholder={helpMes}
      id="signUp"
      type="text"
      class="text-gray-300 border-slate-500 border-2 rounded bg-slate-700"
    />
    <button
      on:click={SignIn}
      class="border rounded bg-slate-900 text-gray-400 mt-3">Start Exam</button
    >
  </div>
{/if}

{#if signedIn && !examEnded}
  <div>
    {#each questions as question, i}
      {#if i % 5 == 0 && i != 0}
        <span class="text-gray-100"
          >{writtenQuestions[(question.questionId - 1) / 5 - 1].question}</span
        >
        <br />
        <br />
        <textarea
          class="bg-slate-500 border rounded text-gray-300"
          bind:value={writtenQuestions[(question.questionId - 1) / 5 - 1]
            .answered}
          on:input={trim_save}
          placeholder="start typing..."
        />
        <hr />
      {/if}
      <span class="text-gray-100"
        >{question.questionId} | {question.question}</span
      >
      <br />
      <br />

      {#each question.choices as choice, x}
        <input
          type="radio"
          id="choice-{question.questionId}-{choice.i}"
          name="choice-{question.questionId}"
          checked={choice.chosen}
          on:change={() => ChangeAnswerMCQ(question.questionId, choice.i)}
        />
        <label
          for="choice-{question.questionId}-{choice.i}"
          class="text-gray-100">{choice.value}</label
        >
        <br />
      {/each}
      <hr />
    {/each}
  </div>

  <div class="flex min-w">
    <button
      on:click={EndExam}
      class="border rounded bg-slate-900 text-gray-400 mt-3 px-3"
      >End Exam</button
    >
  </div>
{/if}

{#if examEnded}
  <h5 class="text-gray-100">Thank you for taking the exam!</h5>
{/if}
