<script lang="ts">
  import Card from './lib/components/Card.svelte';
  import { studentsData } from './lib/data';
  import type { StudentDataItem } from './lib/data';
  import type { Student } from './lib/data';
  import { calculateAverageScore, calculateAge } from './lib/utils';

  // Transform the student data into the correct format
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

  // create shallow copy of the studentsData array
  const students: Student[] = transformStudentData([...studentsData]);
</script>

<main>
  <h1 class="cards__heading">Students</h1>
  <!-- iterate over the students array and display each card -->
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

  /* card section heading */
  .cards__heading {
    padding-bottom: 30px;
    font-family: Tahoma;
    /* add letter spacing to match figma */
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

  /* ≥ 600 px */
  @media (min-width: 600px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* ≥ 960 px */
  @media (min-width: 960px) {
    .cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
