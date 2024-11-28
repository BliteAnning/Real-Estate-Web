import {useState} from 'react';
import { toast } from 'react-toastify';
const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ce69d433-1c7b-44f5-88e9-c42fef8874e6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };

    return ( 
        <section id="contact">
            <div className="contactHead">
                <h1>Contact us</h1>
                <p>Ready to make move? Build a Future with us</p>
            </div>
            <form onSubmit={onSubmit} className="Form">
                <div className="formInputs">
                    <div className="yourName">
                         Your Name
                        <input type="text" name="Name" placeholder="Your Name" required />
                    </div>
                    <div className="yourName">
                         Your email
                        <input type="email" name="Email" placeholder="Your email" required />
                    </div>
                    
                </div>
                <div className="message">
                        <div className="yourName">
                            Message
                            <textarea name="Message" id="" placeholder="Your message"></textarea>
                        </div>
                </div>

                <button className="contactBtn">{result? result: "Send message"}</button>
                

            </form>

        </section>
     );
}
 
export default Contact;