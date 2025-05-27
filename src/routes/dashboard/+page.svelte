<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';

  let accounts: any[] = [];
  let isLoading = true;

  // Format rupiah
  const formatRupiah = (value: number): string =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(value);

  // Ambil data dari view "account_summary"
  onMount(async () => {
    const { data, error } = await supabase
      .from('account_summary')
      .select('*')
      .limit(20);

    if (error) {
      console.error('❌ Error saat fetch data:', error.message);
    } else {
      accounts = data ?? [];
    }

    isLoading = false;
  });
</script>

<h1 class="text-2xl font-bold mb-4">Dashboard</h1>

{#if isLoading}
  <p class="text-gray-500">⏳ Mengambil data akun dari Supabase...</p>
{:else if accounts.length === 0}
  <p class="text-gray-500">Tidak ada data akun yang ditemukan.</p>
{:else}
  <!-- Tabel akun -->
  <div class="bg-white p-6 rounded-xl shadow border overflow-x-auto">
    <table class="min-w-full text-sm">
      <thead>
        <tr class="text-left border-b">
          <th class="py-2">Nama Akun</th>
          <th class="py-2">Kategori</th>
          <th class="py-2">Status</th>
          <th class="py-2 text-right">Revenue Terakhir</th>
          <th class="py-2 text-right">Transaksi</th>
          <th class="py-2 text-right">Total 30 Hari</th>
          <th class="py-2 text-center">Performa</th>
        </tr>
      </thead>
      <tbody>
        {#each accounts as acc}
          <tr class="border-b hover:bg-gray-50">
            <td class="py-2">{acc.account_name}</td>
            <td class="py-2">{acc.category}</td>
            <td class="py-2">{acc.status}</td>
            <td class="py-2 text-right font-mono">{formatRupiah(acc.latest_revenue)}</td>
            <td class="py-2 text-right">{acc.latest_transactions}</td>
            <td class="py-2 text-right">{formatRupiah(acc.total_revenue_30d)}</td>
            <td class="py-2 text-center">
              {#if acc.performance_status === "replace"}
                <span class="text-red-600 font-semibold">Ganti</span>
              {:else if acc.performance_status === "warning"}
                <span class="text-yellow-600 font-semibold">Waspada</span>
              {:else if acc.performance_status === "ok"}
                <span class="text-green-600 font-semibold">OK</span>
              {:else if acc.performance_status === "good"}
                <span class="text-blue-600 font-semibold">Bagus</span>
              {:else}
                <span class="text-purple-600 font-semibold">Excellent</span>
              {/if}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{/if}
