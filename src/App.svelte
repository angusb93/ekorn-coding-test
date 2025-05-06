<script lang="ts">
  import { studentsData } from './lib/data';

  type Student = {
    id: string;
    name: string;
    age: number;
    averageScore: number;
    activeLabel: 'Yes' | 'No';
  };

  // Replace mock example objects with the actual data from the studentsData array
  const students: Student[] = [];
</script>

<main>
  <!-- The list of students -->
  {#each students as student}
    <!-- Example content to showcase Svelte — replace with your own template  -->
    <div>
      <div>{student.name.toUpperCase()}</div>

      <p>
        {#if student.age > 25}
          Mature Student - {student.age} years old
        {:else}
          Young Student - {student.age} years old
        {/if}
      </p>

      Avg score: {student.averageScore}
      Active: {student.activeLabel}
    </div>
  {/each}
</main>

<style>
  main {
    padding: 30px;
  }
</style>
