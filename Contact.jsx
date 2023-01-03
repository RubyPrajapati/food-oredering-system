import React from 'react';

const Contact = () => {
  return (
    <div id="contact">
        <h1>BOOK YOUR TABLE</h1>
        <form>
            <input type="text" placeholder='full-name'/>
            <input type="text" placeholder='Enter-your E-mail'/>
            <textarea placeholder='Write now'></textarea>
            <input type="submit" value="BOOK"/>
        </form>
      
    </div>
  )
}

export default Contact;
