<script lang="ts">
  import { goto } from '$app/navigation';
  import { auth } from '$lib/auth';
  import { redirect } from '@sveltejs/kit';
  import { onMount } from 'svelte';

  import '$lib/app.css';

  auth.subscribe((value) => {
    if (!value) {
      redirect(303, '/login');
    } else {
    }
  });

  onMount(() => {
    if (!$auth) {
      goto('/login');
    }
  });
</script>

<slot />
