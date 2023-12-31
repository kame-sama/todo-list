export default function init() {
  const body = document.querySelector('body');
  body.innerHTML = `
    <div class="content">
      <header class="main-header">
        <h1 data-content="TO DO!">TO DO!</h1>
      </header>
      <nav>
        <div class="buttons">
          <div class="icon new-list-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
            </svg>
          </div>
          <div class="icon edit-list-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
          </div>
        </div>
        <ul class="lists">
        </ul>
        <div class="list-pop-up">
          <header class="secondary-header">
            <h2>Create list</h2>
            <div class="icon list-close">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                />
              </svg>
            </div>
          </header>
          <form>
            <label for="list-title">
              <span>Title:</span>
              <textarea id="list-title" maxlength=19"></textarea>
            </label>
            <button id="list-submit">Done</button>
          </form>
        </div>
        <div class="list-edit">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
              />
            </svg>
          </div>
          <div class="list-to-edit">Default</div>
          <button id="list-rename">Rename</button>
          <button id="list-delete">Delete</button>
        </div>
      </nav>
      <main>
        <div class="buttons">
          <div class="icon new-task-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
            </svg>
          </div>
        </div>
        <ul class="tasks">
        </ul>
        <ul class="completed">
        </ul>
      </main>
      <div class="task-pop-up">
      <header class="secondary-header">
        <h2>Create task</h2>
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            />
          </svg>
        </div>
      </header>
      <form>
        <label for="task-title">
          <span>Title:</span>
          <textarea id="task-title" maxlength="30"></textarea>
        </label>
        <label for="task-description">
          <span>Description:</span>
          <textarea id="task-description" maxlength="115"></textarea>
        </label>
        <label for="task-date">
          <span>Due Date:</span>
          <input type="date" id="task-date" />
        </label>
        <label for="task-priority">
          <span>Priority:</span>
          <select id="task-priority">
            <option value="none" selected disabled>---</option>
            <option value="low">Low!</option>
            <option value="medium">Medium!!</option>
            <option value="high">High!!!</option>
          </select>
        </label>
        <button id="task-submit">Done</button>
      </form>
    </div>
    </div>`;
}
