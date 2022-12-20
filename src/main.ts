import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="header">
      <a href="https://fsharp.org"><img class="logo" src="./fsharp.svg" /></a>
      <h1>F# Mentorship Application</h1>
    </div>
    <form id="form" name="contact" onSubmit="return submitForm()">
      <p>
        <label>Name <span class="req">*</span></label>
        <input type="text" name="name" value="" required/>
      </p>
      <p>
        <label>Email <span class="req">*</span></label>
        <input type="email" name="email" value="" required/>
      </p>
      <p>
        <label>I want to be a <span class="req">*</span></label>
        <label><input type="radio" name="applicant" value="mentor" required> Mentor</label>
        <label><input type="radio" name="applicant" value="mentee"> Mentee</label>
      </p>
      <p>
        <label>Select the topic(s) you are interested in exploring <span class="req">*</span></label>
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
        <label>What is your UTC offset? <span class="req">*</span></label>
        <select required>
          <option disabled selected value> -- Select an Offset -- </option>
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
          <option name="utc" value="0">UTC</option>
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
        <label>Select availability in your <strong>local</strong> time <span class="req">*</span></label>
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
  .querySelectorAll<HTMLInputElement>('.topics input')!
  .forEach(el => {
    el.addEventListener('change', function (_) {
      const formData = getFormData();
      const scheduleTable = document.querySelector('.topics')!;
      if (validateTopics(formData)) {
        scheduleTable.classList.remove('invalid')
      }
      else {
        scheduleTable.classList.add('invalid')
      }
    })
  })

document.querySelector('.topics')!.classList.add('invalid')

document
  .querySelectorAll<HTMLInputElement>('.schedule input')!
  .forEach(el => {
    el.addEventListener('change', function (_) {
      const formData = getFormData();
      const scheduleTable = document.querySelector('.schedule')!;
      if (validateSchedules(formData)) {
        scheduleTable.classList.remove('invalid')
      }
      else {
        scheduleTable.classList.add('invalid')
      }
    })
  })

document.querySelector('.schedule')!.classList.add('invalid')

document
    .querySelector<HTMLFormElement>('#form')!
    .addEventListener('submit', function(event) {
        event.preventDefault();

        const form = event.target as HTMLFormElement

        const formData = new FormData(form);

        if(!validateGroupSelections(formData))
          return;

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

function getFormData() : FormData {
  const form = document.querySelector<HTMLFormElement>('#form')!
  return new FormData(form);
}

function validateGroupSelections(formData:FormData) : boolean {
  if (!validateTopics(formData)) {
    alert("Please select at least one topic");
    return false;
  }

  if (!validateSchedules(formData)) {
    alert("Please select at least one availability in your local time");
    return false;
  }

  return true;
}

function validateTopics(formData:FormData) : boolean {
  const noTopicsSelected = formData.getAll('topics').length === 0

  if (noTopicsSelected) {
    return false;
  }

  return true;
}


function validateSchedules(formData:FormData) : boolean {
  const getFormScheduleValues = (formData:FormData) => {
    const values : Array<any> = []

    formData.forEach((value, key) => {
      if (key.startsWith('schedule_'))
        values.push(value)
    })

    return values;
  }

  const noSchedulesSelected = getFormScheduleValues(formData).length === 0

  if (noSchedulesSelected) {
    return false;
  }

  return true;
}
