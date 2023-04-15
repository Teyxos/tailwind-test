<script lang="ts">
  import { goto } from '$app/navigation';
  import { login } from '$lib/auth';

  let username: string;
  let password: string;

  async function loginBtn() {
    const res = await login(username, password);

    if (res) {
      goto('/');
    }
  }
</script>

<h1 class="text-center font-bold text-4xl my-3">Please login</h1>

<form class="flex flex-col items-center gap-[20px]" action="">
  <input class="text-box" bind:value={username} type="text" name="username" />
  <input class="text-box" bind:value={password} type="pass" name="password" />
  <button
    class="text-lg px-2 py-1 rounded bg-blue-500 text-white"
    on:click={loginBtn}
  >
    Login
  </button>
</form>
