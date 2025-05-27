<script lang="ts">
  let uploadedFile: File | null = null;

  function handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files && input.files.length > 0) {
      uploadedFile = input.files[0];
    }
  }
</script>

<h1 class="text-2xl font-bold mb-4">Import Data</h1>

<div class="max-w-2xl mx-auto py-8">
  <!-- Drag & Drop area -->
<button
  type="button"
  class="w-full border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-purple-500 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
  on:click={() => document.getElementById('file-upload')?.click()}
>
  <div class="text-gray-500 text-xl mb-4">📂</div>
  <h3 class="text-lg font-semibold mb-2">Upload File Excel</h3>
  <p class="text-gray-600 mb-4">Drag & drop file Excel Anda atau klik untuk pilih file</p>
  <p class="text-sm text-gray-500">Format: .xlsx, .xls (Max 10MB)</p>

  <input
    id="file-upload"
    type="file"
    class="hidden"
    accept=".xlsx,.xls"
    on:change={handleFileChange}
  />
</button>

  {#if uploadedFile}
    <div class="mt-6 p-4 bg-green-50 rounded-lg">
      <p class="text-green-800 font-medium">✅ File berhasil dipilih: {uploadedFile.name}</p>
    </div>
  {/if}

  <!-- Format preview -->
  <div class="mt-8">
    <h4 class="font-semibold mb-4">Format Kolom Excel yang Diperlukan:</h4>
    <div class="bg-gray-50 p-4 rounded-lg">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b">
            <th class="text-left py-2">Kolom A</th>
            <th class="text-left py-2">Kolom B</th>
            <th class="text-left py-2">Kolom C</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2">Tanggal</td>
            <td class="py-2">Nama Akun</td>
            <td class="py-2">Komisi (Rp)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
