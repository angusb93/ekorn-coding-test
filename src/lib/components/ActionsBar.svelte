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
  <button onclick={() => onFilter()}>
    {isFiltered ? 'Show All' : 'Show Active Only'}
  </button>
  <button onclick={() => onSort()}
    >{isSorted ? 'Default sorting' : 'Sort A–Z'}
  </button>
</div>

<style>
  .actions-bar {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
</style>
