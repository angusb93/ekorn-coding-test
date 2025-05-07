<script lang="ts">
  import type { Student } from '../data';

  // type the prop
  let { student }: { student: Student } = $props();
</script>

<li role="listitem" class="card">
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
      <!-- calculate whether passed or failed  -->
      <dd>{student.averageScore >= 50 ? 'Yes' : 'No'}</dd>
    </div>
    <div class="card__stat">
      <dt>ID:</dt>
      <dd>{student.id}</dd>
    </div>
  </dl>
</li>

<style>
  /* individual card */
  .card {
    list-style: none; /* hide bullet */
    background: #ffffff;
    border-radius: 6px;
    padding: 20px;
    box-shadow: 0px 6px 20px 0px rgba(86, 87, 75, 0.14);
    font-family: Verdana;
    font-size: 20px;
    line-height: 1;
  }

  .card__title {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: bold;
    color: #4b3d47;
    /* add letter spacing to match figma */
    letter-spacing: -0.96px;
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
