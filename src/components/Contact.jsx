import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { toast } from "react-toastify";


const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_rcf5o9k",
        "template_aegq65a",
        {
          from_name: formData.name,
          to_name: "Taiwo John",
          from_email: formData.email,
          to_email: "jtaiwo909@gmail.com",
          message: formData.message,
        },
        "6t2iQwXgwBp6oV0LP"
      )
      .then(() => {
        setLoading(false);
        toast("Thank you. I will get back to you as soon as possible!");
        setFormData({ name: "", email: "", message: "" }, (error) => {
          setLoading(false);
          console.log(error);
          toast('Something went wrong.') 
        });
      });
  };

  return (
    <div
      className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'
      id='contact'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded 2xl'>
        <p className={styles.sectionSubText}> Get in touch.</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              value={formData.name}
              onChange={handleChange}
              className='bg-tertiary px-6 py-4 placholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='email'
              name='email'
              placeholder='Enter your email address'
              value={formData.email}
              onChange={handleChange}
              className='bg-tertiary px-6 py-4 placholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Message</span>
            <textarea
              rows='7'
              name='message'
              placeholder='message'
              value={formData.message}
              onChange={handleChange}
              className='bg-tertiary px-6 py-4 placholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='text-white py-3 px-8 font-bold shadow-md bg-[#ff0000] rounded-lg shadow-primary'>
            {loading ? "sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[500px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
