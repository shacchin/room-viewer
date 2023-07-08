<script lang="ts" setup></script>

<template>
  <div class="container">
    <header>
      <h1 class="title">Room Viewer</h1>
    </header>
    <aside class="sidebar">
      <Sidebar />
    </aside>
    <main class="content">
      <Viewer />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "title title"
    "sidebar content";
  height: 100vh;
  height: 100dvh;

  header {
    grid-area: title;
  }

  sidebar {
    grid-area: sidebar;
  }

  content {
    grid-area: content;
  }
}
</style>
