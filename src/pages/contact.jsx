export default function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        //TODO: send data to server
        console.log(data);
    }

    return (
        <div>
            <h2 className="display-4 fw-normal mb-4">Contact Me</h2>
            <form className="contact-form" style={{display:'flex', flexDirection:'column', width: '400px'}} onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" className="mb-2" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" className="mb-2" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" className="mb-2" required style={{height: '200px'}}>
                </textarea>
                <button type="submit" className="button">Send</button>
            </form>
        </div>
    )
}