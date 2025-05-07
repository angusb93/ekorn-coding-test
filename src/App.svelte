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
  <!-- Card collection -->
  <ul class="cards" role="list">
    {#each students as student (student.id)}
      <li role="listitem" class="card">
        <article>
          <h2 class="card__title">{student.name}</h2>

          <dl class="card__stats">
            <div class="card__stat">
              <dt>Age:</dt>
              <dd>{student.age}</dd>
            </div>
            <div class="card__stat">
              <dt>Average score:</dt>
              <dd>{student.averageScore}</dd>
            </div>
            <div class="card__stat">
              <dt>Active:</dt>
              <dd>{student.activeLabel}</dd>
            </div>
            <div class="card__stat">
              <dt>Passed:</dt>
              <dd>{student.averageScore >= 50 ? 'Yes' : 'No'}</dd>
            </div>
            <div class="card__stat">
              <dt>ID:</dt>
              <dd>{student.id}</dd>
            </div>
          </dl>
        </article>
      </li>
    {/each}
  </ul>
</main>

<style>
  /* main layout */
  main {
    max-width: 1024px;
    margin-inline: auto;
  }

  /* card section heading */
  .cards__heading {
    padding-bottom: 30px;
    font-family: Tahoma;
  }

  /* layout for the grid of cards */
  .cards {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
    margin: 0;
    padding: 0; /* remove <ul> default space */
  }

  /* individual card */
  .card {
    list-style: none; /* hide bullet */
    background: #ffffff;
    border-radius: 6px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
    font-family: Verdana;
    font-size: 20px;
    line-height: 1;
  }

  .card__title {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
    color: #4b3d47;
  }

  /* student details */
  .card__stats {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .card__stat {
    display: flex;
    justify-content: space-between;
  }

  dt {
    color: #6f626b;
    font-weight: normal;
  }
  dd {
    margin: 0;
    font-weight: bold;
  }
</style>
