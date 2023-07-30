<script setup lang="ts">
import TaskItem from "./TaskItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
</script>

<template>
  <TaskItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Objective</template>
    Create a small task list control using VueJS 3 that allows the user to add,
    remove, and mark tasks as complete.
  </TaskItem>

  <TaskItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Requirements</template>
    <ul>
      <li>Tasks must be able to be added, removed, and marked as complete</li>
      <li>Design must be responsive and mobile friendly</li>
      <li><i>Optional:</i> Save the task list to local storage</li>
    </ul>
  </TaskItem>

  <TaskItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Recommended IDE</template>
    <ul>
      <li>Visual Studio Code</li>
      <li>Plugin: Volar (and disable Vetur)</li>
      <li>Plugin: TypeScript Vue Plugin (Volar)</li>
    </ul>
  </TaskItem>

  <TaskItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Freedom</template>
    Adapt anything from the code that you think will improve the outcome. We
    encourage creativity and innovation.
  </TaskItem>

  <TaskItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Support</template>
    Feel free to contact us with any questions or clarifications you may have.
    We are here to help!
  </TaskItem>
</template>
