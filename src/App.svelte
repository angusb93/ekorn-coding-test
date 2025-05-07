<script lang="ts">
  import { studentsData } from './lib/data';
  import type { StudentDataItem } from './lib/data';
  import type { Scores } from './lib/data';

  type Student = {
    id: string;
    name: string;
    age: number;
    averageScore: number;
    activeLabel: 'Yes' | 'No';
  };

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
      return total / numbers.length;
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
