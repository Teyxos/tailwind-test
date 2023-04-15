<script lang="ts">
  export let name: string, description: string, id: number;

  // Pretty dumb way to delete it from the DOM, but it works
  function deleteTodo() {
    fetch(`http://localhost:3333/todos/delete-todo/${id}`, {
      method: 'DELETE',
    }).then(() => window.location.reload());
  }
</script>

<div class="card relative bg-white rounded-md px-3 py-2 border border-blue-400">
  <h3 class="text-blue-500 font-semibold text-lg">{name}</h3>
  <div>
    <p class="text-clip">{description}</p>
    <button
      class="absolute top-[-10px] right-[-10px] rounded-[50%] h-[20px] w-[20px] bg-neutral-500 hover:bg-red-600"
      on:click|once={deleteTodo}
    />
  </div>
</div>

<style>
  div > div {
    display: flex;
    width: 100%;
  }
</style>
