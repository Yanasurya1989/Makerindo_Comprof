import { motion } from "framer-motion";

function InputForm({title, placeholder, name, type}) {
  return (
    <div className="form-control w-full mb-2">
      <label className="label">
        <span className="label-text text-lg mb-1">{title}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="input w-full focus:outline-none rounded-none border border-black border-x-0 border-t-0 border-b-1"
      />
    </div>
  )
}

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="h-[100vh] flex justify-center items-center"
    >
      <div className="contact-wrapper montserrat w-full">
        <h1 className="text-4xl font-bold text-gray-500 uppercase mb-4">
          Contact Us
        </h1>
        <form action="" method="post" className="grid grid-cols-2 gap-3 sm:gap-1 w-full">
          <div className="left-column p-4">
            <InputForm title="Email" placeholder="johndoe@gmail.com" name="email" type="email"/>
            <InputForm title="Name" placeholder="John doe" name="name" type="text"/>
            <InputForm title="Phone Number" placeholder="+62 8xx" name="phone" type="text"/>
          </div>
          <div className="right-column p-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg mb-1">Message</span>
              </label>
              <textarea
                className="textarea w-full h-full focus:outline-none rounded-none border border-black border-x-0 border-t-0 border-b-1"
                placeholder="Hi, Makerindo can you help to..."
                rows={9}
              ></textarea>
            </div>
          </div>
          <button type="button" className="btn btn-block text-center rounded-none border-black border-1 hover:border-black hover:bg-transparent bg-transparent col-span-2">SEND</button>
        </form>
      </div>
    </motion.section>
  );
}
