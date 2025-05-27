<script>
  export let activeTab = "";
  const menuItems = [
    { id: "dashboard", label: "Dashboard", href: "/dashboard" },
    { id: "import", label: "Import Data", href: "/import" },
    { id: "alerts", label: "Alert Settings", href: "/alerts" },
  ];
</script>

<aside class="w-64 bg-white h-screen border-r p-4 flex flex-col justify-between">
  <div>
    <h1 class="text-2xl font-bold text-purple-600 mb-8">AffiliateGuard</h1>
    <nav class="space-y-2">
      {#each menuItems as item}
        <a
          href={item.href}
          class="block px-4 py-2 rounded-lg hover:bg-purple-100 
            {activeTab === item.id ? 'bg-purple-100 text-purple-600' : 'text-gray-700'}"
        >
          {item.label}
        </a>
      {/each}
    </nav>
  </div>

  <div class="mt-8 border-t pt-4">
    <p class="text-sm text-gray-400 mb-2">Logged in as</p>
    <div class="font-medium">Paduka</div>
    <button class="mt-2 text-red-500 text-sm hover:underline">Logout</button>
  </div>
</aside>
