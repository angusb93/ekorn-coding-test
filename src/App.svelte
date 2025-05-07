<script lang="ts">
  import Card from './lib/components/Card.svelte';
  import { studentsData } from './lib/data';
  import type { StudentDataItem } from './lib/data';
  import type { Scores } from './lib/data';
  import type { Student } from './lib/data';

  function transformStudentData(studentsData: StudentDataItem[]): Student[] {
    const calculateAge = (birthdateString: string): number => {
      const birthdate = new Date(birthdateString);

      // Handle if date string doesnt parse. return 0.
      // I would like to be able to return null here or throw an error.
      if (isNaN(birthdate.getTime())) {
        console.error(`Couldn't parse birthdate: "${birthdateString}"`);
        return 0;
      }

      const today = new Date();
      let age = today.getFullYear() - birthdate.getFullYear();
      const monthDifference = today.getMonth() - birthdate.getMonth();

      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthdate.getDate())
      ) {
        age--;
      }

      return age;
    };

    const calculateAverageScore = (scores: Scores): number => {
      const numbers = Object.values(scores).filter(Number.isFinite);
      if (numbers.length === 0) {
        console.error(`Cannot parse scores`);
        return 0;
      }

      const total = numbers.reduce((sum, n) => sum + n, 0);
      return Math.round(total / numbers.length);
    };

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
    grid-template-columns: repeat(3, 1fr);
    margin: 0;
    padding: 0; /* remove <ul> default space */
  }
</style>
