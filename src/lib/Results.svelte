<script lang="ts">
  import { onMount } from "svelte";
  import { connect } from "@planetscale/database";
  import "dotenv";
  import type { Exam, Question } from "./types";

  const config = {
    host: import.meta.env.VITE_HOST,
    rejectUnauthorized: false,
    username: import.meta.env.VITE_USERNAME,
    password: import.meta.env.VITE_PASSWORD,
  };

  async function GetResults() {
    try {
      const conn = connect(config);
      const rows = await conn
        .execute("SELECT * FROM ExamResult")
        .then((res) => res.rows);

      let exams: Exam[] = [];
      rows.forEach((r) => {
        //@ts-ignore
        let ex: Exam = JSON.parse(r.result);
        let includes = exams.findIndex((e) => e.name == ex.name);
        if (includes == -1) exams.push(ex);
      });
      return exams;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  let exams: Exam[] = [];
  onMount(async () => {
    exams = await GetResults();
  });

  const solve = () => {
    exams.forEach((e) => {
      CheckAnswers(e.questions, e.name);
      e.writtenQuestions.forEach((wq) => {
        CountWords(wq.questionId / 2 + 1, e.name);
      });
    });
  };

  function CountWords(questionId: number, name): number {
    let ele = document.getElementById(
      `${name.trim()}-textarea-${questionId}`
    ) as HTMLTextAreaElement | null;
    let textEle = document.getElementById(
      `${name.trim()}-wordCount-${questionId}`
    );

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
      ele.classList.add("border-4");
      ele.classList.add("border-red-500");
    } else {
      ele.classList.remove("border-4");
      ele.classList.remove("border-red-500");
    }

    return res.length;
  }

  function CheckAnswers(questions: Question[], name) {
    questions.map((q) => {
      let chosen = q.choices.find((c) => c.chosen).i;
      let answer = q.answer.i;

      console.log(`${name.trim()}-choice-${q.questionId}-${answer}`);
      console.log(`${name.trim()}-choice-${q.questionId}-${chosen}`);

      let answerEle = document.getElementById(
        `${name.trim()}-choice-${q.questionId}-${answer}`
      ) as HTMLInputElement | undefined;

      let chosenEle = document.getElementById(      
        `${name.trim()}-choice-${q.questionId}-${chosen}`
      ) as HTMLInputElement | undefined;

      if (chosen == answer) {
        chosenEle.classList.replace("bg-slate-800", "bg-green-700");
        chosenEle.value += "  ✓";
      } else {
        answerEle.classList.replace("bg-slate-800", "bg-green-700");
        answerEle.value += "  ✓";
        chosenEle.classList.replace("bg-slate-800", "bg-red-700");
        chosenEle.value += "  x";
      }
    });
  }
</script>

<div>
  <button class="bg-red-300" on:click={solve}>click me!</button>
  {#each exams as exam}
    <div>
      <span class="text-lg text-gray-50">Start {exam.name}</span>
    </div>

    <div class="md:flex flex-col items-center">
      <div class="md:w-[80vh]">
        {#each exam.questions as question, i}
          {#if i % 5 == 0 && i != 0 && i != 26}
            <div class="mt-3 flex">
              <span class="text-gray-500 font-bold">w.</span>
              <div class="flex flex-col">
                <span
                  class="text-gray-100 font-semibold ml-1 whitespace-pre-wrap break-normal"
                >
                  {exam.writtenQuestions[(question.questionId - 1) / 5 - 1]
                    .question}</span
                >
                <span class="text-gray-500"
                  >(<span
                    id="{exam.name.trim()}-wordCount-{question.questionId}"
                    >0</span
                  > / 70 words)</span
                >
              </div>
            </div>
            <div class="mt-4 mx-4 flex h-[35vh]">
              <textarea
                id="{exam.name.trim()}-textarea-{question.questionId}"
                class="bg-slate-800 p-2 w-full rounded text-gray-300 border-4 border-red-500"
                value={exam.writtenQuestions[(question.questionId - 1) / 5 - 1]
                  .answered}
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
                id="{exam.name.trim()}-choice-{question.questionId}-{choice.i}"
                name="choice-{question.questionId}"
                value={choice.value}
              />
              <br />
            </div>
          {/each}
          <hr
            class="w-80 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-600"
          />
        {/each}
      </div>
    </div>

    <div>
      <span class="text-lg text-gray-50">End {exam.name}</span>
    </div>
    <br />
    <br />
    <p class="text-lg text-gray-50">
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    </p>
    <br />
    <br />
  {/each}
</div>
