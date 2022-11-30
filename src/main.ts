import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="header">
      <a href="https://fsharp.org"><img class="logo" src="./fsharp.svg" /></a>
      <h1>F# Mentorship Application</h1>
    </div>
    <form id="form" name="contact" onSubmit="{() => submitForm()}">
      <p>
        <label>Name</label>
        <input type="text" name="name" value="a"/>
      </p>
      <p>
        <label>Email</label>
        <input type="email" name="email" value="a@b.c"/>
      </p>
      <p>
        <label>I want to be a </label>
        <input type="radio" name="applicant" value="mentor"> Mentor
        <input type="radio" name="applicant" value="mentee"> Mentee
      </p>
      <p>
        <label>Select the topic(s) you are interested in exploring</label>
        <div class="topics">
          <label><input type="checkbox" name="topics" value="intro">Introduction to F#</label>
          <label><input type="checkbox" name="topics" value="deep_div">Deep dive in F#</label>
          <label><input type="checkbox" name="topics" value="web">Distributed system / web development</label>
          <label><input type="checkbox" name="topics" value="ml">Machine learning / data science</label>
          <label><input type="checkbox" name="topics" value="game_dev">Game development</label>
          <label><input type="checkbox" name="topics" value="scripting">Scripting/DevOps</label>
          <label><input type="checkbox" name="topics" value="open_source">Contribute to an open-source project</label>
          <label><input type="checkbox" name="topics" value="compiler">Contribute to the compiler</label>
          <label><input type="checkbox" name="topics" value="up_for_anything">Up for anything</label>
        </div>
      </p>      
      <p>
        <label>What is your UTC offset?</label>
        <select>
          <option value="-12" name="utc">UTC-12</option>
          <option value="-11" name="utc">UTC-11</option>
          <option value="-10" name="utc">UTC-10</option>
          <option value="-9" name="utc">UTC-9</option>
          <option value="-8" name="utc">UTC-8</option>
          <option value="-7" name="utc">UTC-7</option>
          <option value="-6" name="utc">UTC-6</option>
          <option value="-5" name="utc">UTC-5</option>
          <option value="-4" name="utc">UTC-4</option>
          <option value="-3" name="utc">UTC-3</option>
          <option value="-2" name="utc">UTC-2</option>
          <option value="-1" name="utc">UTC-1</option>
          <option name="utc" value="0" selected>UTC</option>
          <option value="1" name="utc">UTC+1</option>
          <option value="2" name="utc">UTC+2</option>
          <option value="3" name="utc">UTC+3</option>
          <option value="4" name="utc">UTC+4</option>
          <option value="5" name="utc">UTC+5</option>
          <option value="6" name="utc">UTC+6</option>
          <option value="7" name="utc">UTC+7</option>
          <option value="8" name="utc">UTC+8</option>
          <option value="9" name="utc">UTC+9</option>
          <option value="10" name="utc">UTC+10</option>
          <option value="11" name="utc">UTC+11</option>
          <option value="12" name="utc">UTC+12</option>
        </select>    
      </p>
      <p>
        <label>Select availability in your <strong>local</strong> time</label>
        <div class="schedule">
          <div class="header"></div>
          <div class="header"><span>Sunday</span></div>
          <div class="header"><span>Monday</span></div>
          <div class="header"><span>Tuesday</span></div>
          <div class="header"><span>Wednesday</span></div>
          <div class="header"><span>Thursday</span></div>
          <div class="header"><span>Friday</span></div>
          <div class="header"><span>Saturday</span></div>
          <div class="header">
            <span class="time">
              <span>9 AM</span>
              <span>-</span>
              <span>12 PM</span>
            </span>
          </div>
          <label><input type="checkbox" name="schedule_9_am" value="sunday"></label>
          <label><input type="checkbox" name="schedule_9_am" value="monday"></label>
          <label><input type="checkbox" name="schedule_9_am" value="tuesday"></label>
          <label><input type="checkbox" name="schedule_9_am" value="wednesday"></label>
          <label><input type="checkbox" name="schedule_9_am" value="thursday"></label>
          <label><input type="checkbox" name="schedule_9_am" value="friday"></label>
          <label><input type="checkbox" name="schedule_9_am" value="saturday"></label>
          <div class="header">
            <span class="time">
              <span>12 PM</span>
              <span>-</span>
              <span>3 PM</span>
            </span>
          </div>
          <label><input type="checkbox" name="schedule_12_pm" value="sunday"></label>
          <label><input type="checkbox" name="schedule_12_pm" value="monday"></label>
          <label><input type="checkbox" name="schedule_12_pm" value="tuesday"></label>
          <label><input type="checkbox" name="schedule_12_pm" value="wednesday"></label>
          <label><input type="checkbox" name="schedule_12_pm" value="thursday"></label>
          <label><input type="checkbox" name="schedule_12_pm" value="friday"></label>
          <label><input type="checkbox" name="schedule_12_pm" value="saturday"></label>
          <div class="header">
            <span class="time">
              <span>3 PM</span>
              <span>-</span>
              <span>6 PM</span>
            </span>
          </div>
          <label><input type="checkbox" name="schedule_3_pm" value="sunday"></label>
          <label><input type="checkbox" name="schedule_3_pm" value="monday"></label>
          <label><input type="checkbox" name="schedule_3_pm" value="tuesday"></label>
          <label><input type="checkbox" name="schedule_3_pm" value="wednesday"></label>
          <label><input type="checkbox" name="schedule_3_pm" value="thursday"></label>
          <label><input type="checkbox" name="schedule_3_pm" value="friday"></label>
          <label><input type="checkbox" name="schedule_3_pm" value="saturday"></label>
          <div class="header">
            <span class="time">
              <span>6 PM</span>
              <span>-</span>
              <span>9 PM</span>
            </span>
          </div>
          <label><input type="checkbox" name="schedule_6_pm" value="sunday"></label>
          <label><input type="checkbox" name="schedule_6_pm" value="monday"></label>
          <label><input type="checkbox" name="schedule_6_pm" value="tuesday"></label>
          <label><input type="checkbox" name="schedule_6_pm" value="wednesday"></label>
          <label><input type="checkbox" name="schedule_6_pm" value="thursday"></label>
          <label><input type="checkbox" name="schedule_6_pm" value="friday"></label>
          <label><input type="checkbox" name="schedule_6_pm" value="saturday"></label>
          <div class="header">
            <span class="time">
              <span>9 PM</span>
              <span>-</span>
              <span>12 AM</span>
            </span>
          </div>
          <label><input type="checkbox" name="schedule_9_pm" value="sunday"></label>
          <label><input type="checkbox" name="schedule_9_pm" value="monday"></label>
          <label><input type="checkbox" name="schedule_9_pm" value="tuesday"></label>
          <label><input type="checkbox" name="schedule_9_pm" value="wednesday"></label>
          <label><input type="checkbox" name="schedule_9_pm" value="thursday"></label>
          <label><input type="checkbox" name="schedule_9_pm" value="friday"></label>
          <label><input type="checkbox" name="schedule_9_pm" value="saturday"></label>
          <div class="header">
            <span class="time">
              <span>12 AM</span>
              <span>-</span>
              <span>3 AM</span>
            </span>
          </div>
          <label><input type="checkbox" name="schedule_12_am" value="sunday"></label>
          <label><input type="checkbox" name="schedule_12_am" value="monday"></label>
          <label><input type="checkbox" name="schedule_12_am" value="tuesday"></label>
          <label><input type="checkbox" name="schedule_12_am" value="wednesday"></label>
          <label><input type="checkbox" name="schedule_12_am" value="thursday"></label>
          <label><input type="checkbox" name="schedule_12_am" value="friday"></label>
          <label><input type="checkbox" name="schedule_12_am" value="saturday"></label>
          <div class="header">
            <span class="time">
              <span>3 AM</span>
              <span>-</span>
              <span>6 AM</span>
            </span>
          </div>
          <label><input type="checkbox" name="schedule_3_am" value="sunday"></label>
          <label><input type="checkbox" name="schedule_3_am" value="monday"></label>
          <label><input type="checkbox" name="schedule_3_am" value="tuesday"></label>
          <label><input type="checkbox" name="schedule_3_am" value="wednesday"></label>
          <label><input type="checkbox" name="schedule_3_am" value="thursday"></label>
          <label><input type="checkbox" name="schedule_3_am" value="friday"></label>
          <label><input type="checkbox" name="schedule_3_am" value="saturday"></label>
        </div>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
`

document
    .querySelector<HTMLButtonElement>('#form')!
    .addEventListener('submit', function(event) {
        event.preventDefault();

        const form = event.target as HTMLFormElement

        const formData = new FormData(form);
        console.log(formData, 'formData')

        const jsonData: Record<string, any> = {};
        formData.forEach((value, key) => {
          if(key === 'topics' || key.startsWith('schedule_')) {
            jsonData[key] = [...(jsonData[key] ?? []), value]
          }
          else {
            jsonData[key] = value
          }
        });

        const request = new XMLHttpRequest();
        request.open('POST', '/.netlify/functions/submit-applicant');
        request.send(JSON.stringify(jsonData));

        alert("Thanks for submitting the form! We'll get back to you soon.");
    })