<script lang="ts">
  import Exam from "./Exam.svelte";
  const StartExam = () => {};
</script>

<div class="flex flex-col max-w-min gap-2">
  <label for="signUp" class="text-gray-100">What is your name?</label>
  <input
    id="signUp"
    type="text"
    class="text-slate-900 border-slate-500 border-2 rounded bg-slate-700"
  />
  <button
    on:click={StartExam}
    class="border rounded bg-slate-900 text-gray-400 mt-3">Start Exam</button
  >
</div>
