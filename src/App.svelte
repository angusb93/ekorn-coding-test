<script lang="ts">
  import Card from './lib/components/Card.svelte';
  import { studentsData } from './lib/data';
  import type { StudentDataItem } from './lib/data';
  import type { Scores } from './lib/data';
  import type { Student } from './lib/data';
  import { calculateAverageScore, calculateAge } from './lib/utils';

  function transformStudentData(studentsData: StudentDataItem[]): Student[] {
    const transformedStudentsData = studentsData.map(student => {
      return {
        id: String(student.id),
        name: `${student.firstName} ${student.lastName}`,
        age: calculateAge(student.birthdate),
        activeLabel: (student.isActive
          ? 'Yes'
          : 'No') as Student['activeLabel'],
        averageScore: calculateAverageScore(student.scores),
      };
    });

    return transformedStudentsData;
  }

  const students: Student[] = transformStudentData([...studentsData]);
</script>

<main>
  <h1 class="cards__heading">Students</h1>
  <ul class="cards" role="list">
    {#each students as student (student.id)}
      <Card {student} />
    {/each}
  </ul>
</main>

<style>
  /* main layout */
  main {
    max-width: 1024px;
    padding-left: 30px;
    padding-right: 30px;
    margin-inline: auto;
    margin-top: 60px;
    margin-bottom: 335px;
  }
  .cards__heading {
    padding-bottom: 30px;
    font-family: Tahoma;
    letter-spacing: 0.4px;
    color: #4b3d47;
  }

  /* layout for the grid of cards */
  .cards {
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr;
    margin: 0;
    padding: 0; /* remove <ul> default space */
  }

  /* ≥ 600 px ≈ “tablet / medium” – 2 columns */
  @media (min-width: 600px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* ≥ 960 px ≈ “desktop / large” – 3 columns (your original) */
  @media (min-width: 960px) {
    .cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
