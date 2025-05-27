<script lang="ts">
  let minThreshold: number = 600000;
  let notifTelegram = true;
  let notifEmail = false;
  let notifWA = false;
  let schedule = "daily";
</script>

<h1 class="text-2xl font-bold mb-6">Pengaturan Alert</h1>

<!-- Threshold Section -->
<div class="mb-8 bg-white p-6 rounded-xl border shadow">
  <h2 class="text-lg font-semibold mb-4">📉 Threshold Revenue</h2>
  <label for="min-threshold" class="block mb-2 text-sm text-gray-600">
    Minimum Revenue untuk Notifikasi
  </label>
  <input
    id="min-threshold"
    type="number"
    bind:value={minThreshold}
    class="w-full p-3 border rounded-lg"
  />
  <p class="text-sm text-gray-500 mt-2">
    Akun dengan pendapatan di bawah nilai ini akan diberi alert.
  </p>
</div>

<!-- Notification Channels -->
<div class="mb-8 bg-white p-6 rounded-xl border shadow">
  <h2 class="text-lg font-semibold mb-4">🔔 Channel Notifikasi</h2>

  <div class="flex items-center gap-3 mb-4">
    <input id="notif-telegram" type="checkbox" bind:checked={notifTelegram} />
    <label for="notif-telegram">Telegram</label>
  </div>

  <div class="flex items-center gap-3 mb-4">
    <input id="notif-email" type="checkbox" bind:checked={notifEmail} />
    <label for="notif-email">Email</label>
  </div>

  <div class="flex items-center gap-3 mb-4">
    <input id="notif-wa" type="checkbox" bind:checked={notifWA} />
    <label for="notif-wa">WhatsApp (khusus user Pro)</label>
  </div>
</div>

<!-- Schedule -->
<div class="mb-8 bg-white p-6 rounded-xl border shadow">
  <h2 class="text-lg font-semibold mb-4">🕒 Jadwal Monitoring</h2>
  <label for="schedule" class="block mb-2 text-sm text-gray-600">Jadwal</label>
  <select
    id="schedule"
    bind:value={schedule}
    class="w-full p-3 border rounded-lg"
  >
    <option value="daily">Setiap Hari (09:00 WIB)</option>
    <option value="12h">Setiap 12 Jam</option>
    <option value="6h">Setiap 6 Jam (Pro)</option>
    <option value="realtime">Real-time (Enterprise)</option>
  </select>
</div>

<!-- Save Button -->
<button
  class="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition w-full text-lg font-semibold"
>
  Simpan Pengaturan
</button>
