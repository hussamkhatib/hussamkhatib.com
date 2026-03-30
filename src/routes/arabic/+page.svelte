<script>
  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime';
  dayjs.extend(relativeTime);

  const progress = [
    "2024-04-29",
    "2024-05-03",
    "2024-05-13",
    "2024-06-17",
    "2024-08-11",
    "2024-09-11",
    "2024-09-23",
    "2024-10-19",
    "2024-11-04",
    "2024-11-26",
    "2024-12-04",
    "2024-12-16",
    "2025-03-09",
    "2025-03-14",
    "2025-03-19",
    "2025-04-05",
    "2025-05-25",
    "2025-06-01",
    "2025-06-14",
  ];

  const totalLessons = 70;
  const completed = progress.length;
  const percent = Math.round((completed / totalLessons) * 100);

  // Time remaining until end of Q2 2025 (June 30, 2025)
  const endQ2 = dayjs('2026-06-30');
  const now = dayjs();
  const diffYears = endQ2.diff(now, 'year');
  const diffMonths = endQ2.diff(now.add(diffYears, 'year'), 'month');
  const diffDays = endQ2.diff(now.add(diffYears, 'year').add(diffMonths, 'month'), 'day');
</script>

<div class="container">
  <div>
  <h1>Arabic Learning Progress</h1>
  <p>Each box represents a lesson. Filled = completed.</p>
  <div class="grid">
    {#each Array(totalLessons) as _, i}
      <div
        class="box {progress[i] ? 'filled' : ''}"
        title={progress[i]
          ? `Lesson ${i+1}: Completed ${dayjs(progress[i]).format('MMMM D, YYYY')}`
          : `Lesson ${i+1}`}
      ></div>
    {/each}
  </div>
</div>

<div class="summary-cards">
  <div class="card">
    <div class="card-title">Lessons Completed</div>
    <div class="card-value">{completed} / {totalLessons}</div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: {percent}%;"></div>
    </div>
    <div class="card-sub">{percent}% complete</div>
  </div>
  <div class="card">
    <div class="card-title">Time Remaining</div>
    <div class="card-value">
      {#if diffYears > 0}{diffYears} {diffYears === 1 ? 'year' : 'years'}{#if diffMonths > 0},{/if} {/if}
      {#if diffMonths > 0}{diffMonths} {diffMonths === 1 ? 'month' : 'months'}{#if diffDays > 0},{/if} {/if}
      {#if diffDays > 0}{diffDays} {diffDays === 1 ? 'day' : 'days'}{/if}
    </div>
    <div class="card-sub">Until end of Q2 2025</div>
  </div>
</div>
</div>


<style>
  .summary-cards {
    display: flex;
    gap: 2rem;
    margin: 2rem auto 1.5rem auto;
    flex-wrap: wrap;
    max-width: 700px;
  }
  .card {
    background: rgba(30, 32, 40, 0.95);
    border-radius: 18px;
    padding: 2rem 2.5rem 1.5rem 2.5rem;
    min-width: 220px;
    box-shadow: 0 2px 16px 0 rgba(0,0,0,0.10);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card-title {
    color: #ccc;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  .card-value {
    color: var(--color-theme-1);
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .progress-bar {
    width: 100%;
    height: 10px;
    background: #23272f;
    border-radius: 6px;
    margin: 0.5rem 0 0.2rem 0;
    overflow: hidden;
  }
  .progress-fill {
    height: 100%;
    background: var(--color-theme-1);
    border-radius: 6px;
    transition: width 0.4s;
  }
  .card-sub {
    color: #aaa;
    font-size: 1rem;
    margin-top: 0.2rem;
  }
  @media (max-width: 700px) {
    .summary-cards {
      flex-direction: column;
      align-items: center;
      gap: 1.2rem;
    }
    .card {
      min-width: 0;
      width: 90vw;
      padding: 1.2rem 1rem 1rem 1rem;
    }
  }
  .container {
    max-width: 500px;
    margin: 2rem auto;
    text-align: center;
    display: flex;
    flex-direction: column;

  }
  .grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(7, 1fr);
    gap: 8px;
    margin: 2rem 0;
  }
  .box {
    width: 100%;
    aspect-ratio: 1 / 1;
    background: #23272f;
    border-radius: 6px;
    border: 2px solid #23272f;
    transition: background 0.2s;
  }
  .box.filled {
    background: var(--color-theme-1);
    border-color: var(--color-theme-1);
  }
  @media (max-width: 600px) {
    .container {
      max-width: 98vw;
      padding: 0 2vw;
    }
    .grid {
      gap: 4px;
    }
  }
</style> 