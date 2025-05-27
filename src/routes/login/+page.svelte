<script lang="ts">
  import { supabase } from '$lib/supabaseClient';
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';
  let errorMessage = '';
  let loading = false;

  async function handleLogin() {
    console.log('Login button clicked');

    if (!email || !password) {
      errorMessage = 'Email dan password wajib diisi!';
      return;
    }

    loading = true;
    errorMessage = '';

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    console.log('DATA:', data);
    console.log('ERROR:', error);

    if (error) {
      errorMessage = error.message;
    } else if (!data.session) {
      errorMessage = 'Login gagal. Tidak ada sesi aktif.';
    } else {
      goto('/dashboard');
    }

    loading = false;
  }
</script>

<h1 class="text-2xl font-bold mb-6">Masuk ke AffiliateGuard</h1>

<div class="max-w-md bg-white p-6 rounded-xl border shadow space-y-4">
  {#if errorMessage}
    <div class="bg-red-100 text-red-700 p-3 rounded">{errorMessage}</div>
  {/if}

  <div>
    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
    <input
      id="email"
      type="email"
      bind:value={email}
      placeholder="contoh@email.com"
      class="w-full border p-2 rounded"
    />
  </div>

  <div>
    <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
    <input
      id="password"
      type="password"
      bind:value={password}
      placeholder="••••••••"
      class="w-full border p-2 rounded"
    />
  </div>

  <button
    on:click={handleLogin}
    class="bg-purple-600 text-white w-full py-2 rounded hover:bg-purple-700 mt-2"
    disabled={loading}
  >
    {loading ? 'Masuk...' : 'Masuk'}
  </button>
</div>
