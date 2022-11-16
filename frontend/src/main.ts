import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>F# Mentorship Form</div>
    <form id="form" name="contact" onSubmit="{() => submitForm()}">
      <p>
        <label>Name <input type="text" name="name" value="a"/></label>
      </p>
      <p>
        <label>Email <input type="email" name="email" value="a@b.c"/></label>
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

        const formData = new FormData(form) ;
        const request = new XMLHttpRequest();

        const jsonData: Record<string, any> = {};
        formData.forEach((value, key) => (jsonData[key] = value));

        request.open('POST', '/.netlify/functions/submit-applicant');
        request.send(JSON.stringify(jsonData));

        alert("Thanks for submitting the form! We'll get back to you soon.");
    })