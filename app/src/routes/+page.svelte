<script lang="ts">
  import ToDo from '$lib/ToDo.svelte';
  import { onMount } from 'svelte';

  type Todo = {
    name: string;
    description: string;
    id: number;
  };

  let todos: Todo[] = [];

  let todoName: string;
  let todoDesc: string;

  $: todos;
  $: lastId = todos.length;

  function submitButton(e: Event) {
    e.preventDefault();

    fetch('http://localhost:3333/todos/create-todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: todoName, todoDesc }),
    });

    todos = [
      ...todos,
      { name: todoName, description: todoDesc, id: lastId + 1 },
    ];
  }

  onMount(async () => {
    const res = await fetch(`http://localhost:3333/todos`);
    const data = await res.json();
    todos = data;
  });
</script>

<h1 class="text-center my-6 text-2xl font-semibold">My ToDo App</h1>

<!-- Create a todo App -->
{#if todos == null || todos.length == 0}
  <h1 class="text-xl text-center">No todos created!</h1>
{:else}
  <li class="grid mx-[10px] grid-cols-4 gap-4">
    {#each todos as todo}
      <ToDo name={todo.name} description={todo.description} id={todo.id} />
    {/each}
  </li>
{/if}

<hr class="bg-slate-300 my-[30px]" />

<form action="" method="post" class="flex flex-col items-center gap-[20px]">
  <input
    bind:value={todoName}
    class="text-box"
    type="text"
    name="name"
    placeholder="Name"
  />
  <input
    bind:value={todoDesc}
    class="text-box"
    type="text"
    name="description"
    placeholder="Description"
  />
  <button class="p-2 rounded bg-blue-500 text-white" on:click={submitButton}
    >Create a ToDo</button
  >
</form>
