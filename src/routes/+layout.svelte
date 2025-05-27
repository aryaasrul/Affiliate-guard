<script>
  import "../app.css";
  import Sidebar from "../components/Sidebar.svelte";

  // aktifkan tab berdasarkan URL
  let activeTab = $page.url.pathname.split("/")[1] || "dashboard";

  import { page } from "$app/stores";
</script>

<div class="flex h-screen">
  <Sidebar {activeTab} />

  <main class="flex-1 overflow-y-auto p-8 bg-gray-50">
    <slot />
  </main>
</div>
