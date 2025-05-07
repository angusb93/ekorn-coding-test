<script lang="ts">
  interface ActionsBarProps {
    isFiltered: boolean;
    isSorted: boolean;
    onFilter: () => void;
    onSort: () => void;
  }
  let { isFiltered, isSorted, onFilter, onSort }: ActionsBarProps = $props();
</script>

<div class="actions-bar">
  <button
    onclick={() => onFilter()}
    aria-pressed={isFiltered}
    aria-label={isFiltered ? 'Show all students' : 'Show active students only'}
    class={isFiltered ? 'button__active' : 'button__not-active'}
  >
    {isFiltered ? 'Show All' : 'Show Active Only'}
  </button>
  <button
    onclick={() => onSort()}
    aria-pressed={isSorted}
    aria-label={isSorted ? 'Reset to default sorting' : 'Sort students A to Z'}
    class={isSorted ? 'button__active' : 'button__not-active'}
    >{isSorted ? 'Default sorting' : 'Sort A–Z'}
  </button>
</div>

<style>
  .actions-bar {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
    font-family: Verdana;
  }

  button {
    padding: 10px 20px;
    border-radius: 999px;
    min-width: 190px;
    font-size: 16px;
    cursor: pointer;
    border: 2px solid transparent;
    background-color: white;
    color: black;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    transition:
      transform 200ms ease,
      box-shadow 200ms ease,
      background-color 200ms ease,
      color 200ms ease,
      border-color 200ms ease;
  }

  .button__active {
    background-color: black;
    color: white;
  }

  /* Focus: accessible focus ring */
  button:focus {
    outline: 2px solid rgba(0, 0, 0, 0.5);
  }

  /* ≥ 600 px */
  @media (min-width: 600px) {
    .actions-bar {
      flex-direction: row;
    }
  }
</style>
